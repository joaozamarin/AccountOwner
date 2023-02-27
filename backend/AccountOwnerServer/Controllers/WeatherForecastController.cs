using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace AccountOwnerServer.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILoggerManager _logger;

    public WeatherForecastController(ILoggerManager logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<string> Get()
    {
        _logger.LogInfo("Testando o log de info");
        _logger.LogDebug("Testando o log de debug");
        _logger.LogError("Testando o log de erro");
        _logger.LogWarn("Testando o log de aviso");

        return new string[]
        {
            "value1",
            "value2"
        };
    }
}
