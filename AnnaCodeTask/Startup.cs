using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AnnaCodeTask.Startup))]
namespace AnnaCodeTask
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
