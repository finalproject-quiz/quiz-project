using Microsoft.EntityFrameworkCore;
namespace QuizStore.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string? Question { get; set; }
        public string? Answer1 { get; set; }
        public string? Answer2 { get; set; }
        public string? Answer3 { get; set; }
        public string? Answer4 { get; set; }

    }

    public class User
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public int Score { get; set; }
    }

    class QuizDb : DbContext
    {
        public QuizDb(DbContextOptions options) : base(options) { }
        public DbSet<Quiz> Quizzes { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;

    }
}
