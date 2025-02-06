Feature:


@chrome
Scenario: Ingreso y valido la URL
Given Ingreso a la URL "https://cucumber.io/"
When Valido que estoy en la URL correcta "https://cucumber.io/"
And hago click en Documentacion 
Then Valido que estoy en documentacion 
 
@firefox
Scenario: Ingreso y valido la URL dos
Given Ingreso a la URL "https://www.whatismybrowser.com/"
When Valido que estoy en la URL correcta "https://www.whatismybrowser.com/"
And hago click en guides 
Then Valido que estoy en guides 

@edge
Scenario: Ingreso y valido la URL tres
Given Ingreso a la URL "https://www.whatismybrowser.com/"
When Valido que estoy en la URL correcta "https://www.whatismybrowser.com/"
And hago click en guides 
Then Valido que estoy en guides 

@safari
Scenario: Ingreso y valido la URL cuatro
Given Ingreso a la URL "https://www.whatismybrowser.com/"
When Valido que estoy en la URL correcta "https://www.whatismybrowser.com/"
And hago click en guides 
Then Valido que estoy en guides 