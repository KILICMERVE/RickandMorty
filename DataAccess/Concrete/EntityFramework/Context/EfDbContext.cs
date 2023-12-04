using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Context
{
    public class EfDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server = DESKTOP-MHOCDF6\SQLEXPRESS; Database = MyProjectDb; Trusted_Connection=true;TrustServerCertificate=True;");
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Episode> Episodes { get; set; }
    }
}
