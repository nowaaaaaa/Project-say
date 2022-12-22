using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.9
//dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 6.0.5
//dotnet ef Migrations add *name*
//dotnet ef Database update
namespace Backend.EF {
    class MyContext : DbContext { 
        public DbSet<User> users { get; set; } = null!;
        public DbSet<Company> companies { get; set; } = null!;
        public DbSet<Machine> machines { get; set; } = null!;
        public DbSet<MachineType> machineTypes { get; set; } = null!;
        public DbSet<AckProblem> ackProblems { get; set; } = null!;
        public DbSet<Ticket> tickets { get; set; } = null!;
        public DbSet<TicketDetails> ticketDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql("User ID = postgres; Password = admin; Host = localhost; port = 5432; Database = Viscon; Pooling = true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasDefaultSchema("EF");
            modelBuilder.Entity<Machine>().HasOne(m => m.company).WithMany(c => c.machines).HasForeignKey(m => m.companyId);
        }
    }
}