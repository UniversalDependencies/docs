---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

A relative clause modifier marks the relation between a relative clause and a noun phrase in a preceding clause. The head of the relative clause is usually a verb. 

### Examples

_Chaill sé pé rud a <b>bhí</b> aige_ `He lost everything that he <b>had</b>'

~~~ sdparse
Chaill sé pé rud a bhí aige \n Lost he whatever thing that had he
acl:relcl(pé,bhí)
nmod(pé, rud)
~~~ 

_Cheannaigh sé leabhar áit a <b>bhí</b> sé ar fáil_ `He bought a book wherever it <b>was</b> available' 

~~~ sdparse
Cheannaigh sé leabhar áit a bhí sé ar fáil \n Bought he book place was available
acl:relcl(áit, bhí)
~~~

_Faigh tuilleadh eolais faoin taisteal a <b>rinne</b> Naomh Pádraig in Éirinn_  `Find out more information about the journies <b>made</b> by Saint Patrick in Ireland'
  
~~~ sdparse
Faigh tuilleadh eolais faoin taisteal a rinne Naomh Pádraig in Éirin \n Find more information about journies made St. Patrick in Ireland
acl:relcl(taisteal, rinne)
~~~

_Usáideadh dílseacht don Eaglais Bhunaithe mar ghléas le (...) daoine áirithe a iompú in aghaidh na <b>hEaglaise</b> inar <b>rugadh</b> iad_  `Loyalty to the Established Church was used as a way of (...) turning certain people against the <b>Church</b> they were <b>born</b> into' 

~~~ sdparse
Usáideadh dílseacht don Eaglais Bhunaithe mar ghléas (...) le daoine áirithe a iompú in aghaidh na hEaglaise inar rugadh iad \n Used loyalty for-the Church Established as instrument (...) with people certain to-turn against the Church in-which were-born they
acl:relcl(hEaglaise, rugadh)
obl(rugadh, inar)
~~~ 

NOTE: There are also examples of embedded relative clauses introduced by the copula, as shown below.

_Tá cúpla rud eile sa leabhar seo ar <b>mhaith</b> liom tagairt dóibh._ `There are a few other things in this book which I would <b>like</b> to address.

~~~ sdparse
Tá cúpla rud eile sa leabhar seo ar mhaith liom tagairt dóibh. \n Are a_couple thing other in_the book this of_which would_be_good with_me to_refer to_them.
acl:relcl(rud, mhaith)
cop(mhaith, ar)
~~~

_...go raibh 49% de <b>pháistí</b>, ar <b>Naíonáin</b> Shinsearacha iad an bhliain sin,..._  `...that 49% of <b>children</b>, <b>who</b> where <b>Senior</b> Infants that year,...' 

~~~ sdparse
go raibh 49% de pháistí , ar Naíonáin Shinsearacha iad an bhliain sin, \n to that 49% of children, of_whom Infants Senior were_they the year that,
acl:relcl(pháistí, Naíonáin)
cop(Naíonáin, ar)
~~~

NOTE: This kind of construction occurs quite often in legal text.

_...cibé <b>forálacha</b> teagmhasacha, forlíontacha agus iarmhartacha is <b>dóigh</b> leis an Aire a bheith riachtanach..._ `...whatever incidental, supplementary and consequential <b>provisions</b> as <b>appear</b> to the Minister to be necessary

~~~ sdparse
...cibé forálacha teagmhasacha, forlíontacha agus iarmhartacha is dóigh leis an Aire a bheith riachtanach... \n ...whatever provisions incidental, supplementary and consequential that is_thought with the Minister to be necessary...
acl:relcl(forálacha, dóigh)
cop(dóigh, is)
csubj:cop(dóigh, bheith)
~~~

The iterrogative pronouns '_cad_' (what) and '_céard_' (a contraction of _cad é (an) rud_, i.e. what thing) are also treated as the relativised fronted head of the clause, as shown below. 

_Ansin céard a <b>tharlós</b> nuair atá tú sean?_ `Then what will <b>happen</b> when you're old?

~~~ sdparse
ROOT Ansin céard a tharlós nuair atá tú sean? \n Then what_thing that will_happen when that_are you old?
root(ROOT, céard)
nsubj(tharlós, a)
acl:relcl(céard, tharlós)
~~~

_Ní deireann sí go soiléir céard a <b>tharlóidh</b> má dhiúltaíonn na daoine do na moltaí seo._ `It doesn't clearly say what will <b>happen</b> if people refuse to accept these recommendations.

~~~ sdparse
Ní deireann sí go soiléir céard a tharlóidh má dhiúltaíonn na daoine do na moltaí seo. \n Does_not say it_(fem) [] clearly what_thing that will happen if refuses the people to the recommendations these. 
acl:relcl(céard, tharlóidh)
nsubj(tharlóidh, a)
ccomp(deireann, céard)
~~~
