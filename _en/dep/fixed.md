---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs)
(the other two being [flat]() and [compound]()). 
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.

The fixed relation is used for certain fixed grammaticized expressions with function words that behave like a single function word. 
Fixed expressions are annotated in a flat, head-initial structure, in which all words in the expression modify the first one using the
`fixed` label.

At present, this relation is used inside the following expressions: 

*as well*

~~~ sdparse
I like dogs as well
advmod(like, as)
fixed(as, well)
~~~

*as well as*

~~~ sdparse
I like dogs as well as cats
fixed(as-4, well)
fixed(as-4, as-6)
cc(cats, as-4)
conj(dogs, cats)
~~~

*such as*

~~~ sdparse
I like fluffy animals , such as dogs
case(dogs, such)
fixed(such, as)
~~~


*due to* (and other forms, such as *d t* and *d/t*)

~~~ sdparse
He cried due to the fact that you hurt him
case(fact, due)
fixed(due, to)
~~~

*because of* (and other forms, such as *b c of* and *b/c of*)

~~~ sdparse
He cried because of you
case(you, because)
fixed(because, of)
~~~

*instead of*

~~~ sdparse
John went instead of Mary
fixed(instead, of)
case(Mary, instead)
~~~

~~~ sdparse
John left early instead of staying for the whole thing
fixed(instead, of)
mark(staying, instead)
~~~

*in case*

~~~ sdparse
I always back up my files in case my computer crashes
fixed(in, case)
mark(crashes, in)
~~~

~~~ sdparse
I always back up my files just in case
fixed(in, case)
advmod(back, in)
advmod(in, just)
~~~

*in case of*

~~~ sdparse
I always back up my files in case of a crash
fixed(in, case)
fixed(in, of)
case(crash, in)
~~~

*of course*

~~~ sdparse
I like dogs , of course
advmod(like, of)
fixed(of, course)
~~~

*so that*

~~~ sdparse
He cried so that you would feel bad
mark(feel, so)
fixed(so, that)
~~~

*more than* (when used synonymously with "over" in a quantity)

~~~ sdparse
More than 90 percent
advmod(percent, More)
fixed(More, than)
~~~

*less than* (when used synonymously with "under" in a quantity)

~~~ sdparse
Less than ten percent
advmod(percent, Less)
fixed(Less, than)
~~~

*up to* (when used in quantities)

~~~ sdparse
Up to fifty percent
fixed(Up, to)
advmod(percent, Up)
~~~

*according to*

~~~ sdparse
According to John
fixed(According, to)
case(John, According)
~~~

*in order*

~~~ sdparse
He cried in order to make you feel bad
mark(feel, in)
fixed(in, order)
~~~

~~~ sdparse
He cried in order that you might feel bad
mark(feel, in)
fixed(in, order)
~~~

~~~ sdparse
He cried in order for you to have something to feel bad about
mark(have, in)
fixed(in, order)
~~~

*rather than*

~~~ sdparse
I decided to get a dog rather than a cat
fixed(rather, than)
cc(cat, rather)
conj(dog, cat)
~~~

*at least* (when not used for quantities)

~~~ sdparse
At least I like dogs
fixed(At, least)
advmod(like, At)
~~~

*as if*

~~~ sdparse
It was as if he cried to make you feel bad
fixed(as, if)
mark(cried, as)
~~~

*prior to*

~~~ sdparse
John left prior to the meeting
fixed(prior, to)
case(meeting, prior)
~~~

*as to*

~~~ sdparse
As to whether I love dogs ...
fixed(As, to)
mark(love, As)
~~~

~~~ sdparse
As to my love of dogs ...
fixed(As, to)
case(love, As)
~~~

*kind of*, *sort of* (as a hedge)

~~~ sdparse
I kind of like dogs
fixed(kind, of)
advmod(like, kind)
~~~

*whether or not*

~~~ sdparse
He 's crying whether or not you feel bad about it
fixed(whether, or)
fixed(whether, not)
mark(feel, whether)
~~~

*not to mention*

~~~ sdparse
This restaurant is pretty cheap with good food , not to mention their friendly staff
fixed(not, to)
fixed(not, mention)
cc(staff, not)
conj(food, staff)
~~~

*as opposed to*

~~~ sdparse
John decided to leave early , as opposed to Mary
fixed(as, opposed)
fixed(as, to-9)
case(Mary, as)
~~~

*let alone*

~~~ sdparse
He could n't handle being hurt , let alone hurt by you
fixed(let, alone)
cc(hurt-10, let)
conj(hurt-6, hurt-10)
~~~

*so as to*

~~~ sdparse
John left early so as to miss the meeting
fixed(so, as)
fixed(so, to)
mark(miss, so)
~~~

*in between*

~~~ sdparse
John left in between meetings
fixed(in, between)
case(meetings, in)
~~~

*all but*

~~~ sdparse
John has all but left
fixed(all, but)
advmod(left, all)
~~~

*that is*

~~~ sdparse
The dogs need to be housebroken -- that is , '' potty - trained ''
fixed(that, is)
advmod(trained, that)
~~~

*how come*

~~~ sdparse
How come John left early ?
fixed(How, come)
mark(left, How)
~~~

*had better* (and *'d better*)

~~~ sdparse
You had better apologize
fixed(had, better)
aux(apologize, had)
~~~

*one another* (as a reciprocal pronoun; however, `fixed` is not currently used for *each other*)

~~~ sdparse
They saw one another
fixed(one, another)
aux(saw, one)
~~~


### Not `fixed`s
The following are **not** annotated as `fixed`s, but are instead labeled according to their apparent internal structure.

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

*at most*, *at least* (when used for quantities. To determine whether *at least* should be an `fixed` or not in borderline cases, substitute it with *at most*; if the sentence remains grammatical, it should receive its surface analysis)

~~~ sdparse
at most 50 percent
nmod(percent, most)
case(most, at)
~~~

~~~ sdparse
at least 50 percent
nmod(percent, least)
case(least, at)
~~~

*at best*, *at worst*

~~~ sdparse
At best , they were guesses
nmod(guesses, best)
case(best, At)
~~~

~~~ sdparse
At worst , they were lies
nmod(lies, worst)
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

*nothing but X*, *anything but X*: *but* is treated as a preposition like *except* <!-- https://github.com/UniversalDependencies/UD_English-EWT/issues/272 -->

~~~ sdparse
Harriet eats nothing but tomato sandwiches
nmod(nothing, sandwiches)
case(sandwiches, but)
~~~

*compared to/with X*: *compared* is treated as a verb <!-- https://github.com/UniversalDependencies/UD_English-EWT/issues/78 -->

~~~ sdparse
This glass is tall compared to that one
advcl(tall, compared)
obl(compared, one)
case(one, to)
~~~

*as soon as*, *as long as* (standard [comparative analysis](/u/overview/specific-syntax.html#comparatives); contrast coordinating *as well as* above)

~~~ sdparse
Let 's leave as soon as it ends .
advmod(leave, soon)
advmod(soon, as-4)
advcl(soon, ends)
mark(ends, as-6)
nsubj(ends, it)
~~~
<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
