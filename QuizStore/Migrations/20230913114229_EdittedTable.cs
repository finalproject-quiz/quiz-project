using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuizStore.Migrations
{
    public partial class EdittedTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Answer",
                table: "Quizzes",
                newName: "Answer4");

            migrationBuilder.AddColumn<string>(
                name: "Answer1",
                table: "Quizzes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Answer2",
                table: "Quizzes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Answer3",
                table: "Quizzes",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer1",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "Answer2",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "Answer3",
                table: "Quizzes");

            migrationBuilder.RenameColumn(
                name: "Answer4",
                table: "Quizzes",
                newName: "Answer");
        }
    }
}
