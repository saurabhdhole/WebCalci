using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using WebCalci.Models;

namespace WebCalci.DAL
{
    public class CalciContext : DbContext
    {

        public CalciContext() : base("CalciContext")
        {

        }

        public System.Data.Entity.DbSet<WebCalci.Models.User> Users { get; set; }
    }
}