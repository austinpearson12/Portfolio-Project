
using Portfolio_Project.Helper;
using Portfolio_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;


namespace Portfolio_Project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    //string interpelation
                    var from = $"{model.FromEmail}<{WebConfigurationManager.AppSettings["emailto"]}>";

                    var email = new MailMessage(from, WebConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = model.Subject,
                        Body = model.Body,
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return RedirectToAction("Index", "Home");  
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
}