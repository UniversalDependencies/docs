---
layout: entry
title:  'mwe'
shortdef : 'multi-word expression'
---

The multi-word expression (modifier) relation is used for certain fixed grammaticized expressions with function words that behave like a single function word. Multiword expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the
`mwe` label.

At present, this relation is used inside the following expressions: 

*as well*

~~~ sdparse
I like dogs as well
advmod(like, as)
mwe(as, well)
~~~

*as well as*

~~~ sdparse
I like dogs as well as cats
mwe(as-4, well)
mwe(as-4, as-6)
cc(dogs, as-4)
~~~

*such as*

~~~ sdparse
I like fluffy animals , such as dogs
case(dogs, such)
mwe(such, as)
~~~


*due to* (and other forms, such as *d t* and *d/t*)

~~~ sdparse
He cried due to the fact that you hurt him
case(fact, due)
mwe(due, to)
~~~

*because of* (and other forms, such as *b c of* and *b/c of*)

~~~ sdparse
He cried because of you
case(you, because)
mwe(because, of)
~~~

*instead of*

~~~ sdparse
John went instead of Mary
mwe(instead, of)
case(Mary, instead)
~~~

~~~ sdparse
John left early instead of staying for the whole thing
mwe(instead, of)
mark(staying, instead)
~~~

*in case*

~~~ sdparse
I always back up my files in case my computer crashes
mwe(in, case)
mark(crashes, in)
~~~

~~~ sdparse
I always back up my files just in case
mwe(in, case)
advmod(back, in)
advmod(in, just)
~~~

*in case of*

~~~ sdparse
I always back up my files in case of a crash
mwe(in, case)
mwe(in, of)
case(crash, in)
~~~

*of course*

~~~ sdparse
I like dogs , of course
advmod(like, of)
mwe(of, course)
~~~

*so that*

~~~ sdparse
He cried so that you would feel bad
mark(feel, so)
mwe(so, that)
~~~

*more than* (when used synonymously with "over" in a quantity)

~~~ sdparse
More than 90 percent
advmod(percent, More)
mwe(More, than)
~~~

*less than* (when used synonymously with "under" in a quantity)

~~~ sdparse
Less than ten percent
advmod(percent, Less)
mwe(Less, than)
~~~

*up to* (when used in quantities)

~~~ sdparse
Up to fifty percent
mwe(Up, to)
advmod(percent, Up)
~~~

*according to*

~~~ sdparse
According to John
mwe(According, to)
case(John, According)
~~~

*in order*

~~~ sdparse
He cried in order to make you feel bad
mark(feel, in)
mwe(in, order)
~~~

~~~ sdparse
He cried in order that you might feel bad
mark(feel, in)
mwe(in, order)
~~~

~~~ sdparse
He cried in order for you to have something to feel bad about
mark(have, in)
mwe(in, order)
~~~

*rather than*

~~~ sdparse
I decided to get a dog rather than a cat
mwe(rather, than)
cc(rather, dog)
~~~

*at least* (when not used for quantities)

~~~ sdparse
At least I like dogs
mwe(At, least)
advmod(like, At)
~~~

*as if*

~~~ sdparse
It was as if he cried to make you feel bad
mwe(as, if)
mark(cried, as)
~~~

*prior to*

~~~ sdparse
John left prior to the meeting
mwe(prior, to)
case(meeting, prior)
~~~

*as to*

~~~ sdparse
As to whether I love dogs ...
mwe(As, to)
mark(love, As)
~~~

~~~ sdparse
As to my love of dogs ...
mwe(As, to)
case(love, As)
~~~

*kind of*

~~~ sdparse
I kind of like dogs
mwe(kind, of)
advmod(like, kind)
~~~

*whether or not*

~~~ sdparse
He 's crying whether or not you feel bad about it
mwe(whether, or)
mwe(whether, not)
mark(feel, whether)
~~~

*not to mention*

~~~ sdparse
This restaurant is pretty cheap with good food, not to mention their friendly staff
mwe(not, to)
mwe(not, mention)
cc(cheap, not)
conj(staff, cheap)
~~~

*as opposed to*

~~~ sdparse
John decided to leave early , as opposed to Mary
mwe(as, opposed)
mwe(as, to-9)
case(Mary, as)
~~~

*as opposed to*

~~~ sdparse
He could n't handle being hurt , let alone hurt by you
mwe(let, alone)
cc(alone, hurt-6)
conj(hurt-6, hurt-9)
~~~

*so as to*

~~~ sdparse
John left early so as to miss the meeting
mwe(so, as)
mwe(so, to)
mark(so, miss)
~~~

*in between*

~~~ sdparse
John left in between meetings
mwe(in, between)
case(in, meetings)
~~~

*all but*

~~~ sdparse
John has all but left
mwe(all, but)
advmod(all, left)
~~~

*that is*

~~~ sdparse
The dogs need to be housebroken -- that is , '' potty - trained ''
mwe(that, is)
advmod(rained, that)
~~~

*how come*

~~~ sdparse
How come John left early ?
mwe(How, come)
mark(left, How)
~~~

*had better* (and *'d better*)

~~~ sdparse
You had better apologize
mwe(had, better)
aux(had, apologize)
~~~

### Not `mwe`s
The following are **not** annotated as `mwe`s, but are instead labeled according to their apparent internal structure.

*out of*, *off of* (All double prepositions denoting spatial relations are annotated with two cases on the nominal)

~~~ sdparse
Get out of there !
nmod(Get, there)
case(there, out)
case(there, of)
~~~

~~~ sdparse
Get off of that !
nmod(Get, that)
case(that, off)
case(that, of)
~~~ 

*by far*

~~~ sdparse
Dogs are the best animal by far
nmod(animal, far)
case(far, by)
~~~

*what about*

~~~ sdparse
What about John ?
nmod(What, John)
case(John, about)
~~~

*at all*

~~~ sdparse
I don't like her at all
nmod(like, all)
case(all, at)
~~~

*at most*, *at least* (when used for quantities. To determine whether *at least* should be an `mwe` or not in borderline cases, substitute it with *at most*; if the sentence remains grammatical, it should receive its surface analysis)

~~~ sdparse
at most 50 percent
npadvmod(percent, most)
case(most, at)
~~~

~~~ sdparse
at least 50 percent
npadvmod(percent, least)
case(least, at)
~~~

*at best*, *at worst*

~~~ sdparse
At best, they were guesses
npadvmod(guesses, best)
case(best, At)
~~~

~~~ sdparse
At worst, they were lies
npadvmod(lies, worst)
case(worst, At)
~~~

*what if*

~~~ sdparse
What if John left early ?
advcl(What, left)
mark(left, if)
~~~

*so long*

~~~ sdparse
So long , Ham 's ... you will be missed
advmod(long, So)
vocative(long, Ham)
parataxis(long, missed)
~~~
