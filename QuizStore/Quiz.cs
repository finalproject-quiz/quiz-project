using Microsoft.EntityFrameworkCore;
namespace QuizStore.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public string? Answer1 { get; set; }
        public string? Answer2 { get; set; }
        public string? Answer3 { get; set; }
        public string? Answer4 { get; set; }
        public string? CorrectAnswer { get; set; }
    }

    public class User
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public ICollection<Attempt> Attempt { get; set; }
    }

    public class Attempt
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }


    class QuizDb : DbContext
    {
        public QuizDb(DbContextOptions options) : base(options) { }
        public DbSet<Question> Questions { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Attempt> Attempts { get; set; } = null!;

    }
}
