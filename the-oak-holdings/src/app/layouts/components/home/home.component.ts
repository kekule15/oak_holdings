import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';

  slides = [
    {
      imageSrc: '../../../../assets/images/slides/slide1n.png',
      imageAlt: 'The Oak Holdings',
      title: 'The Oak Holdings',
      desc: "The Oak Holdings is designed to be Africa’s first multi-faceted business ecosystem, touching on everyday lives, and providing professional services across multiple sectors.",
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide1.png',
      imageAlt: 'Oak Homes',
      title: 'Oak Homes',
      desc: 'Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States.',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2.png',
      imageAlt: 'The Oak Capital',
      title: 'The Oak Capital',
      desc: 'A venture capital firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, health care services and agriculture',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2n.png',
      imageAlt: 'The Oak Digital Bank',
      title: 'The Oak Digital Bank',
      desc: 'The Oak Digital Bank is a Neo-Bank, which is designed to be a vehicle of economic empowerment, providing outstanding digital banking experiences to equip our customers with tools that are pivotal to their success stories',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
  ];

  services = [
    {
      imageSrc: '../../../../assets/images/slides/slide3.png',
      imageAlt: 'Oak Homes',
      title: 'Oak Homes',
      desc: '<p>Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States.</p>',
      btnText: 'Get More Info',
      btnLink: 'https://oakhomeslimited.com/',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide2.png',
      imageAlt: 'The Oak Capital',
      title: 'The Oak Capital',
      desc: '<p>A venture capital firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, health care services and agriculture.</p>',
      btnText: 'Get More Info',
      btnLink: 'https://theoakcapital.com/',
    },
    {
      imageSrc: '../../../../assets/images/slides/slide1.png',
      imageAlt: 'The Oak Digital Bank',
      title: 'The Oak Digital Bank',
      desc: '<p>The Oak Digital Bank is a Neo-Bank, which is designed to be a vehicle of economic empowerment, providing outstanding digital banking experiences to equip our customers with tools that are pivotal to their success stories.</p>',
      btnText: 'Get More Info',
      btnLink: 'contactUs',
    },
  ];

  contacts = [
    {
      url: '/',
      title: '4, Ribadu Street, Ikoyi, Lagos, Nigeria.',
      icon: 'ri-home-fill',
    },
    {
      url: 'support@theoakholdings.com',
      title: 'support@theoakholdings.com',
      icon: 'ri-send-plane-fill',
    },
    {
      url: '+2349090000015 ',
      title: '+234 909 000 0015 ',
      icon: 'ri-phone-fill',
    },
  ];

  isSubmitting = false;

  noFirstName = false;
  noFirstNameMessage = '';

  noLastName = false;
  noLastNameMessage = '';

  noEmail = false;
  noEmailMessage = '';

  noMessage = false;
  noMessageMessage = '';

  canSubmit = false;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private toast: ToastrService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  checkEmail() {
    let email = this.form.value.email;
    if (email == '') {
      this.noEmail = true;
      this.noEmailMessage = 'Valid email address is required';
    } else {
      this.noEmail = false;
    }
  }

  checkFirstName() {
    let firstName = this.form.value.firstName;
    if (firstName == '') {
      this.noFirstName = true;
      this.noFirstNameMessage = 'Valid first name is required';
    } else {
      this.noFirstName = false;
    }
  }

  checkLastName() {
    let lastName = this.form.value.lastName;
    if (lastName == '') {
      this.noLastName = true;
      this.noLastNameMessage = 'Valid last name is required';
    } else {
      this.noLastName = false;
    }
  }

  checkMessage() {
    let Message = this.form.value.Message;
    if (Message == '') {
      this.noMessage = true;
      this.noMessageMessage = 'Valid last name is required';
    } else {
      this.noMessage = false;
    }
  }

  form = this.formBuilder.group({
    firstName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    lastName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    phoneNumber: [''],
    source: [''],
    message: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });

  async onSubmit() {
    if (this.form.invalid) {
      this.toast.error(
        'Please provide valid data. Remember all fields except phone and how you had about us are required',
        'Request Denied'
      );
      return;
    } else {
      this.isSubmitting = true;
      this.form.disable;

      let firstName = this.form.value.firstName;
      let lastName = this.form.value.lastName;
      let email = this.form.value.email;
      let phoneNumber = this.form.value.phoneNumber;
      let source = this.form.value.source;
      let message = this.form.value.message;

      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        source: source,
        message: message,
      };

      this.toast.success(
        'Your message is well received, we will be in touch. Thank You',
        'Message Sent!'
      );
      this.isSubmitting = false;
      this.form.enable;
      this.form.reset();
    }
  }
}
