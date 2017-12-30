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
Մոտ հարյուր մարդ եկավ խնջույքի ։ \n About 100 people came to-the-party .
advmod(հարյուր, Մոտ)
advmod(100, About)
~~~

We use a special label, [advmod:emph]() for adverbial modifiers that are used for emphasis.
