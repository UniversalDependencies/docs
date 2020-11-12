---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
udver: '2'
---

Irish cleft constructions use a copula and are analysed in line with other copular construction: COP PRED SUBJ. 
In contrast to English, Irish clefts are much less restrictive with regards to the type of element that can be fronted: nouns, prepositional phrases, adverbial phrases, adjectives and verbal nouns. Note that the verbal particle that introduces `csubj:cleft` is always labelled `mark:prt`. 

### Examples

#### Nominal fronting ####

_Is <b>leabhar</b> a thug sí dom_ 'It is a <b>book</b> that she gave me'

~~~ sdparse
Is leabhar a thug sí dom \n is book [] gave she to_me
csubj:cleft(leabhar, thug)
mark:prt(thug, a)
cop(leabhar, Is)
~~~

NOTE: Relative clauses may also be clefted. As shown below, the relative clause is raised to predicate level when it occurs in the predicate position in a copular phrase.

_Is í Croinic Thomáis Eccleston is <b>foinse</b> do sheoladh na litreach seo_  `The Chronicle of Thomas Eccleston is the <b>source</b> of the sending of this letter'

~~~ sdparse
ROOT Is í Croinic Thomáis Eccleston is foinse do sheoladh na litreach seo \n Is it(fem) Chronicle of_Thomas Eccleston []  source of sending of_the letter this
csubj:cleft(Croinic, foinse)
root(ROOT, Croinic)
~~~

_Is é Michael D. Higgins ba <b>chionsiocair</b> leis an Roinn a bhunú sa bhliain 1992._ `Michael D. Higgins <b>was</b> the driving force behind the establishment of the Department in 1992. 

~~~ sdparse
ROOT Is é Michael D Higgins ba chionsiocair leis an Roinn a bhunú sa bhliain 1992. \n ROOT Is it(masc) Michael D Higgins [] primary_cause with the Department to establish in_the year 1992.
root(ROOT, Michael)
csubj:cleft(Michael, chionsiocair)
csubj:cop(chionsiocair, bhunú)
~~~

#### Adverbial fronting ####

_Is <b>laistigh</b> de bhliain a déanfar é_ 'It is <b>within</b> a year that it will be done'

~~~ sdparse
Is laistigh de bhliain a déanfar é \n is within a year [] will_be_done it
csubj:cleft(laistigh, déanfar)
mark:prt(déanfar, a)
cop(laistigh, Is)
~~~


#### Prepositional phrase fronting ####

_Is <b>sa pháirc</b> a chonaic mé é_ `It is <b>in the park</b> that I saw him'

~~~ sdparse
Is sa pháirc a chonaic mé é \n is in_the park [] saw I him
csubj:cleft(pháirc, chonaic)
mark:prt(chonaic, a)
cop(pháirc, Is)
~~~

#### Adjective predicate fronting ####

_Is <b>mó</b> atá sí siúd ina ghá ná sinne anso._ `She is needed here <b>more than</b> we are.'

~~~ sdparse
Is mó atá sí siúd ina ghá ná sinne anso. \n Is more that_is she [emph] in_its need than us_[emph] here.
csubj:cleft(mó, atá)
cop(mó, Is)
~~~

NOTE: In phrases where the adjectival predicate is fronted, the noun should still be treated as the predicate with the adjective demoted to adjectival modifier dependent on that noun/the head of the noun phrase.

_Is iomaí <b>seift</b> atá á lorg ag údaráis phoiblí ar fud an domhain..._ `Public authorities all over the world are looking for numerous <b>ways</b> to...'

~~~ sdparse
Is iomaí seift atá á lorg ag údaráis phoiblí ar fud an domhain \n Is many trick that_are at_her looking by authorities pub on whole of_the world 
csubj:cleft(seift, atá)
cop(seift, Is)
amod(seift, iomaí)
~~~

### NOTE 
Sometimes it is difficult to determine whether to use the csubj:cleft label or the acl:relcl label for certain phrases. Here are a few steps to help determine which label to use. 

1. Check to see if it follows the copula-predicate-subject order-if so then it is likely to be a cleft. 
2. If the phrase is fronted for emphatic reasons then is is likely to be a cleft. 
3. Categorise by how it’s fronted (PP, NP, AdvP, AdjP)- if it is a fronted NP, then it is more likely to be either a relative clause or a cleft. If the NP consists of an augment pronoun and a noun it is a cleft. However, if the first noun is not an augment pronoun and is being equated with the second NP, then the second NP has an embedded relative clause. 

### Emphatic 
_Is ise a chuir Dick Spring i mbun na Roinne Oideachais_ 'It is her who put Dick Spring in charge of the Department of Education'

~~~ sdparse
Is ise a chuir Dick Spring i mbun na Roinne Oideachais
cleft(ise, chuir)
~~~

### Augment Pronoun
_Is í Máire a chuir Dick Spring i mbun na Roinne Oideachais_ 'It is Máire who put Dick Spring in charge of the Department of Education'

~~~ sdparse
Is í Máire a chuir Dick Spring i mbun na Roinne Oideachais
cleft(Máire, chuir)
~~~

### Two noun phrases are being equated by the copula
* (‘ise’ & ‘té’ in this example)

_Is ise an té a chuir Dick Spring i mbun na Roinne Oideachais_ 'She is the person who put Dick Spring in charge of the Department of Education'

~~~ sdparse
Is ise an té a chuir Dick Spring i mbun na Roinne Oideachais
acl:relcl(té, chuir)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:22 CET 2020 -->
