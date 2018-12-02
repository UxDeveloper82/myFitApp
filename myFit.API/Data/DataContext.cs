using Microsoft.EntityFrameworkCore;
using myFit.API.Models;

namespace myFit.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options ) : base (options) { }

        public DbSet<Value> Values { get; set; }  


    }
}