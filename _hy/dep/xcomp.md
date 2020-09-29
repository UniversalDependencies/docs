---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the `xcomp` (normally by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
Ուզում ՞ ես լողալ ։ \n Do-you want to-swim ?
xcomp(Ուզում, լողալ)
xcomp(want, to-swim)
~~~

~~~ sdparse
Երեկ ես սկսեցի աշխատել այնտեղ ։ \n Yesterday I started to-work there .
xcomp(սկսեցի, աշխատել)
xcomp(started, to-work)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause.
That is, there should be no available interpretation where the subject of the lower clause may be distinct
from the specified role of the upper clause.
In cases where the missing subject may or must be distinct from a fixed role in the higher clause,
[ccomp]() should be used instead, as below. This includes cases of arbitrary subjects and anaphoric control.

~~~ sdparse
Ղեկավարը հրամայեց փորել ։ \n The-boss ordered to-dig .
ccomp(հրամայեց, փորել)
ccomp(ordered, to-dig)
~~~

Pro-drop languages have clauses where the subject is not present as a separate word,
yet it is inherently present (and often deducible from the form of the verb)
and it does not depend on arguments from a higher clause.
Thus in neither of the following two Armenian examples is there any overt subject,
yet only the second example contains an `xcomp`.

~~~ sdparse
Գրում եմ , որովհետև խոստացել եմ ։ \n I-write , because I-have promised .
advcl(Գրում, խոստացել)
advcl(I-write, promised)
~~~

~~~ sdparse
Խոստացել եմ գրել ։ \n Promised I-have to-write .
xcomp(Խոստացել, գրել)
xcomp(Promised, to-write)
~~~

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_.
Examples:

* _Նա որոշումը մտահոգիչ համարեց։_ “She declared the decision worrying.”
* _Նա որոշումը հաջողություն համարեց։_ “She declared the decision a success.”

We could paraphrase the sentence using a subordinate clause: _She declared that the decision was worrying._
There are two predicates mixed in one clause: 1. she declared something, and 2. the decision was worrying (according to her opinion).
The secondary predicate will be attached to the main predicate as an `xcomp`:

~~~ sdparse
Նա որոշումը մտահոգիչ համարեց ։ \n She declared the-decision worrying .
nsubj(համարեց, Նա)
nsubj(declared, She)
obj(համարեց, որոշումը)
obj(declared, the-decision)
xcomp(համարեց, մտահոգիչ)
xcomp(declared, worrying)
~~~

In the enhanced representation, there is an additional subject link showing the secondary predication:

~~~ sdparse
Նա որոշումը մտահոգիչ համարեց ։ \n She declared the-decision worrying .
nsubj(համարեց, Նա)
nsubj(declared, She)
obj(համարեց, որոշումը)
obj(declared, the-decision)
xcomp(համարեց, մտահոգիչ)
xcomp(declared, worrying)
nsubj(մտահոգիչ, որոշումը)
nsubj(worrying, the-decision)
~~~

Remember that `xcomp` is used for core arguments of clausal predicates
so it will not be used for other instances of secondary predication.
For instance, in _Նա մոլոր մտավ սենյակ_ “She entered the room errant” we also have a double predication
(she entered the room; she was errant).
But _մոլոր_ “errant” is not a core argument of _մտնել_ “enter”: leaving it out will neither affect grammaticality
nor significantly alter the meaning of the verb.
On the other hand, leaving out _մտահոգիչ_ “worrying” in _նա որոշումը մտահոգիչ համարեց_ “she declared the decision worrying”
will either render the sentence ungrammatical or lead to a different interpretation of _համարեց_ “declared.”

The result is that in _Նա մոլոր մտավ սենյակ,_ “She entered the room errant”, _մոլոր_ “errant” will depend on _Նա_ “She” and the relation will be [acl]() instead of `xcomp`.
<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
