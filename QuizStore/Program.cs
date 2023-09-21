using Microsoft.OpenApi.Models;
using QuizStore.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("Quizzes") ?? "Data Source=Quizzes.db";

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSqlite<QuizDb>(connectionString);
builder.Services.AddCors();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "QuizStore API",
        Description = "Making the Quizzes you love",
        Version = "v1"
    });
});

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "QuizStore API V1");
});

app.UseCors(builder =>
{
    builder.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173");
    builder.WithHeaders("Content-Type");
    builder.WithMethods("GET", "POST");
});

app.MapGet("/", () => "Hello World!");
app.MapGet("/questions", async (QuizDb db) => await db.Questions.ToListAsync());

app.MapPost("/users", async (QuizDb db, User user) =>
{
    await db.Users.AddAsync(user);
    await db.SaveChangesAsync();
    return Results.Created($"/user/{user.Id}", user);
});

app.MapPost("/questions", async (QuizDb db, Question question) =>
{
    await db.Questions.AddAsync(question);
    await db.SaveChangesAsync();
    return Results.Created($"/question/{question.Id}", question);
});


app.Run();
