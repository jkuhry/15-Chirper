﻿using Chirper.WebApi.Infrastructure;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

//tell owin about our new entry point
[assembly: OwinStartup(typeof(Chirper.WebApi.Startup))]
namespace Chirper.WebApi
{
    public class Startup
    {
        public bool AllowInsecureHttp { get; private set; }
        public void Configuration(IAppBuilder app)
        {
            //map url routes to the right c# methods
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);

            ConfigureOAuth(app);

            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

        //setup OAuth
        public void ConfigureOAuth(IAppBuilder app)
        {
            //configure authentication
            var authenticationOptions = new OAuthBearerAuthenticationOptions();
            app.UseOAuthBearerAuthentication(authenticationOptions);

            // configure authorization, configure token
            var authorizationOptions = new OAuthAuthorizationServerOptions
            {
                // for development only 
                AllowInsecureHttp = true,
                //map token api endpoint
                TokenEndpointPath = new PathString("/api/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new ChirperAuthorizationServerProvider()

            };
            app.UseOAuthAuthorizationServer(authorizationOptions);

        }


    }
}