---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define, modify, name, or describe that noun. It includes
parenthesized examples, as well as defining abbreviations in one of
these structures.

~~~ sdparse
Sam , my brother , arrived
appos(Sam-1, brother-4)
~~~

~~~ sdparse
Bill ( John 's cousin )
appos(Bill-1, cousin-5)
~~~

~~~ sdparse
The Australian Broadcasting Corporation ( ABC )
appos(Corporation-4, ABC-6)
~~~

`appos` is intended to be used between two nominals. In general, modulo punctuation, the two halves of an apposition can be switched. 
For example, you could also say _My brother, Sam, arrived._ There are somewhat similar constructions with titles 
where the title is less than a full nominal, such as _state senator Paul Mnuchin_, where reversal is impossible 
or would require insertion of a determiner to make a 
full nominal. Some grammatical traditions, descending from Latin, call _state senator_ in such cases a “fixed (or close) apposition” and take the name as the head. However, we seem to have only one nominal not two here. For example:

> President Obama

> \*Obama President

> state senator Paul Mnuchin

> \*Paul Mnuchin state senator

`appos` should not be used in such cases. However, the examples can usually be rendered in a fuller form, corresponding to “loose (or wide) apposition” in the Latin tradition, where there are two full phrases. Then the relation `appos` is appropriate, for example:

~~~ sdparse
Paul Mnuchin , the senior Oregon state senator
appos(Mnuchin-2, senator-8)
~~~

As is often the case, there are borderline cases. In formal writing, punctuation is usually a good signal of apposition, 
but there are certainly cases of apposition where no punctuation is used:

~~~ sdparse
the leader of the militant Lebanese Shiite group Hassan Nasrallah
appos(group-8, Hassan-9)
flat(Hassan-9, Nasrallah-10)
~~~

Good tests include to ask whether the two halves are full nominals, whether the two halves can be swapped or not, and whether 
there is case or agreement concord (in a language with rich morphology). So we have:

~~~ sdparse
I met the French actor Gaspard Ulliel
nsubj(met-2, I-1)
det(actor-5, the-3)
amod(actor-5, French-4)
obj(met-2, actor-5)
appos(actor-5, Gaspard-6)
flat(Gaspard-6, Ulliel-7)
~~~

~~~ sdparse
I met Gaspard Ulliel the French actor 
nsubj(met-2, I-1)
obj(met-2, Gaspard-3)
flat(Gaspard-3, Ulliel-4)
det(actor-7, the-5)
amod(actor-7, French-6)
appos(Gaspard-3, actor-7)
~~~

~~~ sdparse
I met Gaspard Ulliel , the French actor 
nsubj(met-2, I-1)
obj(met-2, Gaspard-3)
flat(Gaspard-3, Ulliel-4)
punct(Gaspard-3, ,-5)
det(actor-8, the-6)
amod(actor-8, French-7)
appos(Gaspard-3, actor-8)
~~~

~~~ sdparse
I met French actor Gaspard Ulliel
nsubj(met-2, I-1)
amod(actor-4, French-3)
obj(met-2, actor-4)
flat(actor-4, Gaspard-5)
flat(actor-4, Ulliel-6)
~~~

While items like abbreviations are generally reversable, the determiner test suggested above doesn't quite work there, since the determiner seems to belong with the main item:

~~~ sdparse
The ABC ( Australian Broadcasting Corporation )
appos(ABC-2, Corporation-6)
~~~

In the rare cases of more than one appositive nominal, all nouns should be marked as modifying the first noun, rather than being chained:

~~~ sdparse
Sam , my brother , John 's cousin , arrived
appos(Sam-1, brother-4)
appos(Sam-1, cousin-8)
~~~

Note however that nested apposition cannot be completely excluded. It may occur in combination with coordination:

~~~ sdparse
You can choose between four subjects , language ( German or French ) , economy , technology and art .
appos(subjects, language)
conj(language, economy)
conj(language, technology)
conj(language, art)
cc(art, and)
appos(language, German)
conj(German, French)
cc(French, or)
~~~

`appos` is also used to link key-value pairs in addresses, signature blocs, etc. (see also the [list]() label):

~~~ sdparse
Steve Jones Phone: 555-9814 Email: jones@abc.edf
flat:name(Steve-1, Jones-2)
list(Steve-1, Phone:-3)
list(Steve-1, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
~~~
