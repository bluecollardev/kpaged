define({
    name: 'personalInfo',
	id: 'personalInfo',
	autoRender: false,
	autoBind: false,
	/**
	 * Override the default setBlocks function
	 * 
	 * @element String: A valid HTML5 element or DOM DocumentFragment
	 * @attributes Object: An object containing key-value pairs of attributes and values
	 * @ref DOM Node: A reference node for inserting the new node
	 *
	 * @return DOMBuilder: this
	 */
	setLayout: function () {
		this._layout = this.layout;
	},
	layout: {
		tag: 'fieldset',
		id: 'basic-information',
		legend: 'Basic Information',
		children: [
			{
				tag: 'div',
				class: 'kpaf-row field',
				fields: [
					{														
						id: 'insuredID',
						name: 'Insured_Id',
						tag: 'input',
						type: 'hidden',
						data: {
							bind: 'Insured_Id'
						}
					},
					{
						id: 'entityLinkRowID',
						name: 'entityLinkRowID',
						tag: 'input',
						type: 'hidden',
						data: {
							bind: 'entityLinkRowID'
						}
					},
					{
						id: 'insuredType',
						name: 'insuredType',
						tag: 'input',
						type: 'hidden',
						data: {
							bind: 'type'
						}
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [
						{
							id: 'prefix',
							name: 'prefix',
							label: 'Prefix',
							tag: 'input',
							type: 'text',
							class: 'medium',
							style: 'width: 208px', 
							data: {
								role: 'dropdownlist',
								bind: {
									source: {
										type: 'custom',
										config: {
											data: [
												{ Key: 'Dr.', Value: 'Dr.' },
												{ Key: 'Miss', Value: 'Miss' },
												{ Key: 'Mr.', Value: 'Mr.' },
												{ Key: 'Mrs.', Value: 'Mrs.' },
												{ Key: 'Ms.', Value: 'Ms.' },
												{ Key: 'Rev.', Value: 'Rev.' },
												{ Key: 'Sir', Value: 'Sir' }
											]
										}
									},
									value: 'prefix'
								},
								optionLabel: ' '
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'firstName',
							name: 'firstName',
							label: 'First Name',
							tag: 'input',
							type: 'text',
							class: 'medium k-textbox',
							data: {
								bind: 'firstName'
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'middleName',
							name: 'middleName',
							label: 'Middle Name',
							tag: 'input',
							type: 'text',
							class: 'medium k-textbox',
							data: {
								bind: 'middleName'
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'lastName',
							name: 'lastName',
							label: 'Last Name',
							tag: 'input',
							type: 'text',
							class: 'medium k-textbox',
							data: {
								bind: 'lastName'
							}
						}]
					}
				]
			},
			{

				tag: 'div',
				class: 'kpaf-row field',
				fields: [
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'birthDate',
							name: 'birthDate',
							label: 'Birth Date',
							tag: 'input',
							type: 'date',
							class: 'medium',
							style: 'width: 208px',
							data: {
								role: 'datepicker',
								bind: 'birthDate',
								culture: 'en-CA',
								format: 'dd/MM/yyyy',
								parseFormats: ['yyyy-MM-dd', 'dd/MM/yyyy', 'd/MM/yyyy', 'd/M/yyyy']
							},
							validation: {
								required: true,
								date: true,
								message: 'Please enter a valid date of birth (dd/mm/yyyy)'
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'gender',
							name: 'gender',
							label: 'Gender',
							tag: 'input',
							type: 'text',
							class: 'medium',
							style: 'width: 208px',
							data: {
								role: 'dropdownlist',
								bind: {
									source: {
										type: 'custom',
										config: {
											data: [
												{ Key: 'Male', Value: 'Male' },
												{ Key: 'Female', Value: 'Female' }
											]
										}
									},
									value: 'gender'																		
								},
								optionLabel: ' '
							},
							validation: {
								required: true,
								message: 'Please choose a gender'
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'maritalStatus',
							name: 'maritalStatus',
							label: 'Marital Status',
							tag: 'input',
							type: 'text',
							class: 'medium',
							style: 'width: 208px',
							data: {
								role: 'dropdownlist',
								bind: {
									source: {
										type: 'custom',
										config: {
											data: [
												{ Key: 'Divorced', Value: 'Divorced' },
												{ Key: 'Interdependent', Value: 'Interdependent' },
												{ Key: 'Married', Value: 'Married' },
												{ Key: 'Separated', Value: 'Separated' },
												{ Key: 'Single', Value: 'Single' },
												{ Key: 'Widowed', Value: 'Widowed' }
											]
										}
									},
									value: 'maritalStatus'
								},
								optionLabel: ' ',
								validation: {
									required: true,
									message: 'Please choose a marital status'
								}
							}
						}]
					},
					{
						tag: 'div',
						class: 'fieldgroup',
						group: [{
							id: 'estate',
							name: 'estate',
							label: 'Estate',
							tag: 'input',
							type: 'checkbox',
							data: {
								bind: {
									checked: 'estate'
								}
							}
						}]
					}
				]
			},
			{
				block: 'autorow',
				config: {
					items: [
						{
							id: 'occupation',
							name: 'occupation',
							label: 'Occupation',
							tag: 'input',
							type: 'text',
							class: 'medium',
							style: 'width: 308px',
							data: {
								role: 'combobox',
								bind: {
									source: {
										type: 'custom',
										config: {
											data: [
												{ Key: '169', Value: 'Accountant' },
												{ Key: '161', Value: 'Accountant - CA Designation' },
												{ Key: '163', Value: 'Accountant - CGA Designation' },
												{ Key: '162', Value: 'Accountant - CMA Designation' },
												{ Key: '120', Value: 'Architect' },
												{ Key: '121', Value: 'Auto Repair Garage/Body Shop' },
												{ Key: '300', Value: 'Bookkeeper' },
												{ Key: '130', Value: 'Business - Professional' },
												{ Key: '129', Value: 'Business Owner' },
												{ Key: '140', Value: 'Child Care' },
												{ Key: '150', Value: 'Computer Services' },
												{ Key: '125', Value: 'Contractor' },
												{ Key: '170', Value: 'Driver - Delivery/Truck/Taxi/Bus' },
												{ Key: '189', Value: 'Education' },
												{ Key: '182', Value: 'Education - Professor' },
												{ Key: '181', Value: 'Education - Teacher' },
												{ Key: '190', Value: 'Engineer - Professional' },
												{ Key: '200', Value: 'Farmer' },
												{ Key: '210', Value: 'Food Services/Hospitality' },
												{ Key: '124', Value: 'Home Business' },
												{ Key: '220', Value: 'Homemaker/Housewife' },
												{ Key: '230', Value: 'Insurance/Financual' },
												{ Key: '240', Value: 'Janitorial' },
												{ Key: '250', Value: 'Laborer' },
												{ Key: '260', Value: 'Lawyer' },
												{ Key: '270', Value: 'Manager - Financial' },
												{ Key: '280', Value: 'Manager - Non-financial' },
												{ Key: '299', Value: 'Medical' },
												{ Key: '294', Value: 'Medical - Dentist' },
												{ Key: '292', Value: 'Medical - General Practitioner (GP)' },
												{ Key: '296', Value: 'Medical - Nurse' },
												{ Key: '295', Value: 'Medical - Pharmacist' },
												{ Key: '293', Value: 'Medical - Surgeon' },
												{ Key: '291', Value: 'Medical - Veterinarian' },
												{ Key: '310', Value: 'Office Administrator' },
												{ Key: '320', Value: 'Police/Fire/Ambulance/Military' },
												{ Key: '330', Value: 'Real Estate' },
												{ Key: '122', Value: 'Realty & Rental Property' },
												{ Key: '123', Value: 'Rental & Service Stores' },
												{ Key: '340', Value: 'Retired' },
												{ Key: '350', Value: 'Sales/Retail' },
												{ Key: '360', Value: 'Social WOrker' },
												{ Key: '370', Value: 'Student' },
												{ Key: '389', Value: 'Tradesperson' },
												{ Key: '540', Value: 'Unemployed' }
											]
										}
									},
									value: 'occupation'
								},
								suggest: true,
								filter: 'contains',
								optionLabel: ' ',
							},
							validation: {
								message: 'Please choose an occupation'
							}
						}
					
					]
				}
			},
			{
				block: 'autorow',
				config: {
					items: [
						{
							id: 'emailAddress',
							name: 'emailAddress',
							label: 'Email',
							tag: 'input',
							type: 'text',
							class: 'medium k-textbox',
							data: {
								bind: 'emailAddress'
							}
						},
						{
							id: 'personalWebPage',
							name: 'personalWebPage',
							label: 'Web Page',
							tag: 'input',
							type: 'text',
							class: 'medium k-textbox',
							data: {
								bind: 'webPage'
							}
						}
					]
				}
			}
		]
	}
});