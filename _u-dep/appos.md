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

As is often the case, there are borderline cases. In formal writing, punctuation is often a good signal of apposition, 
but there are certainly cases that feel like apposition where no punctuation is used:

~~~ sdparse
the leader of the militant Lebanese Shiite group Hassan Nasrallah
appos(group-8, Hassan-9)
flat(Hassan-9, Nasrallah-10)
~~~

While items like abbreviations are generally reversable, the determiner test suggested above doesn't quite work there, since the determiner seems to belong with the main item:

~~~ sdparse
The ABC ( Australian Broadcasting Corporation )
appos(ABC-2, Corporation-6)
~~~

While `appos` is normally between two nominals, there are a few cases where there is a relation with a clause, 
such as when describing facts or events for which `appos` still feels appropriate:

~~~ sdparse
This problem , that people could lower their tax rates by choosing to become corporations , might become acute .
appos(problem-2, lower-7)
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
