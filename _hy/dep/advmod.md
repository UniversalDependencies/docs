---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](ADV)
or adverbial phrase that serves to modify predicate or a modifier word.

Note that in the Armenian grammatical tradition, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological 
[cases](Case). We differentiate adverbials realized as adverbs (`advmod`) and adverbials realized by noun phrases or adpositional phrases ([obl]()). 

~~~ sdparse
գենետիկորեն մոդիֆիկացված սնունդ \n genetically modified food
advmod(մոդիֆիկացված, գենետիկորեն)
advmod(modified, genetically)
~~~

~~~ sdparse
քիչ հաճախ \n less often
advmod(հաճախ, քիչ)
advmod(often, less)
~~~

~~~ sdparse
Ուր/PRON ՞/PUNCT ես/AUX ուզում/VERB գնալ/VERB արձակուրդներին/NOUN ։/PUNCT \n Where do-you want to-go during-the-holidays ?
advmod(գնալ, Ուր)
obl(գնալ, արձակուրդներին)
advmod(to-go, Where)
obl(to-go, during-the-holidays)
~~~

~~~ sdparse
Մոտ/ADV հարյուր/NUM մարդ/NOUN եկավ/VERB խնջույքի/NOUN ։ \n About 100 people came to-the-party .
advmod(հարյուր, Մոտ)
advmod(100, About)
~~~

~~~ sdparse
Խնդիրը/NOUN[Case=Nom] պարզվեց/VERB ընտրություններից/NOUN[Case=Abl] երկու/NUM օր/NOUN[Case=Nom] առաջ/ADV ։ \n The-problem was-solved two days before the-elections .
advmod(պարզվեց, առաջ)
obl(առաջ, օր)
nummod(օր, երկու)
obl(առաջ, ընտրություններից)
advmod(was-solved, before)
obl(before, days)
nummod(days, two)
obl(before, the-elections)
~~~

We use a special label, [advmod:emph]() for adverbial modifiers that are used for emphasis.
