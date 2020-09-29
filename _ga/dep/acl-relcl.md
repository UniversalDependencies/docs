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

_Faigh tuilleadh eolais faoin taisteal a <b>rinne</b> Naomh Pádraig in Éirinn_  `Find out more information about the journeys<b>made</b> by Saint Patrick in Ireland'
  
~~~ sdparse
Faigh tuilleadh eolais faoin taisteal a rinne Naomh Pádraig in Éirin \n Find more information about journies made St. Patrick in Ireland
acl:relcl(taisteal, rinne)
~~~

_Usáideadh dílseacht don Eaglais Bhunaithe mar ghléas le (...) daoine áirithe a iompú in aghaidh na <b>hEaglaise</b> inar <b>rugadh</b> iad_  `Loyalty to the Established Church was used as a way of (...) turning certain people against the Church into which they were <b>born</b>' 

~~~ sdparse
Usáideadh dílseacht don Eaglais Bhunaithe mar ghléas (...) le daoine áirithe a iompú in aghaidh na hEaglaise inar rugadh iad \n Used loyalty for-the Church Established as instrument (...) with people certain to-turn against the Church in-which were-born they
acl:relcl(hEaglaise, rugadh)
obl(rugadh, inar)
~~~ 

NOTE: 'dá' in Irish is often POS-tagged as SCONJ (conditional marker) in the treebank. However, it is also a relative compound when the particles _a_ and _ar_ are used with the prepositions _de_ and _do_ to become _dá_ and _dár_.

_Níor chuala mise, ná aon duine <b>dá</b> raibh in aon sacán liom, mo thuismitheoirí ag labhairt Béarla riamh._ 'I did not hear, or anyone else my age who was with me, my parents speaking English before. 

~~~ sdparse
'Níor chuala mise, ná aon duine dá raibh in aon sacán liom, mo thuismitheoirí ag labhairt Béarla riamh. \n Not hear me, or any person who was in any age with_me, my parents at speaking English before.
obl(raibh, dá)
acl:relcl(duine, raibh)
~~~

NOTE: There are also examples of embedded relative clauses introduced by the copula, as shown below.

_Tá cúpla rud eile sa leabhar seo ar <b>mhaith</b> liom tagairt dóibh._ `There are a few other things in this book which I would <b>like</b> to address.

~~~ sdparse
Tá cúpla rud eile sa leabhar seo ar mhaith liom tagairt dóibh. \n Are a_couple thing other in_the book this of_which would_be_good with_me to_refer to_them.
acl:relcl(rud, mhaith)
cop(mhaith, ar)
~~~

_...go raibh 49% de <b>pháistí</b>, ar <b>Naíonáin Shinsearacha</b> iad an bhliain sin,..._  `...that 49% of children, who where <b>Senior Infants</b> that year,...' 

~~~ sdparse
go raibh 49% de pháistí , ar Naíonáin Shinsearacha iad an bhliain sin, \n to that 49% of children, of_whom Infants Senior were_they the year that,
acl:relcl(pháistí, Naíonáin)
cop(Naíonáin, ar)
~~~

NOTE: This kind of construction occurs quite often in legal text.

_...cibé forálacha teagmhasacha, forlíontacha agus iarmhartacha is <b>dóigh</b> leis an Aire a bheith riachtanach..._ `...whatever incidental, supplementary and consequential provisions as <b>appear</b> to the Minister to be necessary

~~~ sdparse
...cibé forálacha teagmhasacha, forlíontacha agus iarmhartacha is dóigh leis an Aire a bheith riachtanach... \n ...whatever provisions incidental, supplementary and consequential that is_thought with the Minister to be necessary...
acl:relcl(forálacha, dóigh)
cop(dóigh, is)
csubj:cop(dóigh, bheith)
~~~

NOTE: A relative clause can appear with a copula. The copula equates two NPs, with a relative clause coming off the second NP. 

_Is ise an té a <b>chuir</b> Dick Spring i mbun na Roinne Oideachais_ 'She is the person who <b>put</b> Dick Spring in charge of the Department of Education'

~~~ sdparse
Is ise an té a chuir Dick Spring i mbun na Roinne Oideachais \n Is her the person who put Dick Spring in charge of_the Department of_Education

cop(ise, Is)
nsubj(ise, té)
acl:relcl(té, chuir)
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
<!-- Interlanguage links updated Út zář 29 18:41:03 CEST 2020 -->
