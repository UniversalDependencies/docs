---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

UD Irish uses the `compound` relation for noun compounding. In Irish, when two nouns are compounded, the second is in the genitive case. While the definition of compound can vary depending on the literature, for UD we take the compound relation to refer to any two or more words that are closely bound together in describing a discrete entity. By discrete we mean a compound noun often has a different, or more specific meaning than the individual components combined. 

### Examples

We currently define noun compounds as including compounding noun constructions. The absence of a definite article in certain noun-noun constructions may indicate whether a noun-noun construction is compound: where the noun dependent is indefinite, the construction is often compound, while the same construction with a definite noun dependent is often labelled as nmod. (i.e. _deireadh seachtaine_ 'weekend' vs _deireadh na seachtaine_ 'end of the week').

_cluiche <b>ceannais</b>_ `<b>final</b>'   (lit. game of_authority)

~~~ sdparse
chasfar na contaetha seo ar a chéile sa chluiche ceannais \n will_meet the counties this on their other in_the game of_authority
compound(chluiche, ceannais)
~~~

_lucht <b>imirce</b>_ `<b>emigrants</b>'   (lit. crowd of_emigrating)

~~~ sdparse
ag breathnú ar na báid seoil ar a mbealach le lucht imirce go Meiriceá \n at looking on the boats of_sailing with crowd of_emigrating to America
compound(lucht, imirce)
~~~

One possible exception is the example given below: ‘_oifig an phoist_’. The choice of label depends on whether this construction is deemed non-compositional (office of the post) or compositional (Post Office).

_Oifig an <b>Phoist</b>_ `<b>Post</b> Office'   (lit. Office of_the Post)

~~~ sdparse
ag cosaint na n-oifigí poist tuaithe \n at protecting the offices post country
compound(n-oifigí, poist)
~~~

Another indication that the construction might be a compound noun is if the combination of both nouns together gives a meaning that is different in some way to the individual meaning of both words
Mac tíre (lit. ‘son of the land’) ‘wolf’

_mic <b>léinn</b>_ `<b>students</b>'   (lit. sons of_learning)

~~~ sdparse
beidh an lámh in uachtar acu feasta ar mhic léinn \n will_be the hand in upper at_them from_now_on on sons of_learning
compound(mhic, léinn)
~~~

If a noun-noun construction contains a cranberry word that does not occur outside of that specific construction, that is a strong indicator that the construction should be labelled as compound, i.e. _Cúig déag_ (lit. ‘five teen’) ‘fifteen’. However, the cranberry word still attaches to the ordinal number even if it occurs further from its head, as shown below. 

_naoi gcéad <b>déag</b>_ nineteen hundred

~~~ sdparse
naoi gcéad déag \n nine hundreds -teen
compound(naoi, déag)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:13 CEST 2020 -->
