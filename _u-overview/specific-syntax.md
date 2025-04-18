---
layout: base
title:  'Other Constructions'
permalink: u/overview/specific-syntax.html
udver: '2'
---

# Other Constructions

This section of the [syntax overview](syntax.html) contains detailed discussion of particular linguistic constructions that fall outside (or cut across) the main categories of simple clauses, complex clauses, and nominal phrases.

* [Coordination](#coordination)
* [Ellipsis](#ellipsis)
* [Comparative constructions](comparatives.html)
* [Paratactic constructions](#paratactic-constructions)
* [Punctuation](#punctuation)


## Coordination

As discussed in the section on [complex clauses](complex-syntax.html), coordination is essentially a symmetrical relation. However, in order to satisfy the dependency tree constraint, the first conjunct is treated as the parent (or “technical head”) of all following conjuncts via the [u-dep/conj]() relation. Coordinating conjunctions and punctuation delimiting the conjuncts are attached to the associated conjunct using the [u-dep/cc]() and [u-dep/punct]() relations respectively. This analysis is applied to all cases of coordination at the clause, phrase or word level.

~~~ sdparse
He came home , took a shower and immediately went to bed .
conj(came, took)
conj(came, went)
punct(took, ,-4)
cc(went, and)
~~~

~~~ sdparse
He read the newspaper and a good book .
conj(newspaper, book)
cc(book, and)
~~~

~~~ sdparse
He read one or two books .
conj(one, two)
cc(two, or)
~~~

<a name="ellipsis"></a>

## Ellipsis

The UD approach to ellipsis can be summarized as follows:

1. If the elided element has no overt dependents, we do nothing.
2. If the elided element has overt dependents, we promote one of these to take the role of the head.
3. If the elided element is a predicate and the promoted element is one of its arguments or adjuncts,
   we use the `orphan` relation when attaching other non-functional dependents to the promoted head.

### Ellipsis in Nominals

If the head nominal is elided, we promote dependents in the following order: `amod` > `nummod` > `det` > `nmod` > `case`.

Examples:

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes . \n He buys himself a green car and she buys herself a red .

nsubj(kauft-2, Er-1)
det(Auto-6, ein-4)
amod(Auto-6, grünes-5)
obj(kauft-2, Auto-6)
conj(kauft-2, kauft-9)
nsubj(kauft-9, sie-8)
obj(kauft-9, rotes-12)
det(rotes-12, ein-11)
~~~

~~~ sdparse
She saw every animal at the zoo but he saw only some .

nsubj(saw-2, She-1)
det(animal-4, every-3)
obj(saw-2, animal-4)
conj(saw-2, saw-10)
advmod(some-12, only-11)
obj(saw-10, some-12)
~~~

~~~ sdparse
She saw three monkeys and he saw two .

nsubj(saw-2, She-1)
nummod(monkeys-4, three-3)
obj(saw-2, monkeys-4)
conj(saw-2, saw-7)
obj(saw-7, two-8)
~~~

### Ellipsis in Clauses

If the main predicate is elided, we use simple promotion only if there is an `aux` or `cop`, or a `mark` in the case of an infinitival marker.

Example:

~~~ sdparse
Sue likes pasta and Peter does , too .

nsubj(likes-2, Sue-1)
obj(likes-2, pasta-3)
conj(likes-2, does-6)
nsubj(does-6, Peter-5)
advmod(does-6, too-8)
~~~

~~~ sdparse
Sue is hungry and Peter is , too .

nsubj(hungry-3, Sue-1)
cop(hungry-3, is-2)
conj(hungry-3, is-6)
nsubj(is-6, Peter-5)
advmod(is-6, too-8)
~~~

~~~ sdparse
They will do it if they want to .

nsubj(do-3, They-1)
aux(do-3, will-2)
obj(do-3, it-4)
advcl(do-3, want-7)
nsubj(want-7, they-6)
xcomp(want-7, to-8)
~~~

In more complicated cases where a predicate is elided but no `aux` or `cop` is present, simple promotion (without `orphan` deprels) could lead to very unnatural and confusing relations. For example, in the following sentence, _you_ would be the subject of _coffee_, suggesting that the second clause contains a copular construction rather than an elided predicate.

<div class="conllu-parse" tabs="yes">
# visual-style 6 5 nsubj color:red
1 I      I      _ PRP _ 2 nsubj _ _
2 like   like   _ VBP _ 0 root  _ _
3 tea    tea    _ NN  _ 2 obj   _ _
4 and    and    _ CC  _ 6 cc    _ _
5 you    you    _ PRP _ 6 nsubj _ _
6 coffee coffee _ VBP _ 2 conj  _ SpaceAfter=No
7 .      .      _ .   _ 2 punct _ _
</div>

Of course, one may decide to promote _you_ instead of _coffee,_ but suggesting that _coffee_ is a direct object of _you_ is no better:

<div class="conllu-parse" tabs="yes">
# visual-style 5 6 obj color:red
1 I      I      _ PRP _ 2 nsubj _ _
2 like   like   _ VBP _ 0 root  _ _
3 tea    tea    _ NN  _ 2 obj   _ _
4 and    and    _ CC  _ 5 cc    _ _
5 you    you    _ PRP _ 2 conj _ _
6 coffee coffee _ VBP _ 5 obj  _ SpaceAfter=No
7 .      .      _ .   _ 2 punct _ _
</div>

To avoid confusion and signal that the dependency structure is incomplete, we use the special relation `orphan` to connect the non-promoted dependents with the promoted dependent. Orphaned dependents are considered for promotion in the following order:
`nsubj` > `obj` > `iobj` > `obl` > `advmod` > `csubj` > `xcomp` > `ccomp` > `advcl` > `dislocated` > `vocative`.
If it is necessary to select among several orphans of the same type (e.g., there are just two orphans and both are `advmod`),
the orphan occurring first (closer to the sentence start) is promoted.

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
obj(like-2, tea-3)
conj(like-2, you-5)
cc(you-5, and-4)
orphan(you-5, coffee-6)
~~~

~~~ sdparse
Mary wants to buy a book and Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
conj(wants-2, Jenny-8)
orphan(Jenny-8, CD-10)
~~~

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
obj(left, company)
conj(left, many)
orphan(many, good)
~~~

~~~ sdparse
Mary wants to buy a book . ROOT And Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
root(ROOT, Jenny)
orphan(Jenny, CD)
~~~

~~~ sdparse
She gave the dog a bone , and the man a flower .

nsubj(gave, She)
iobj(gave, dog)
det(dog, the-3)
obj(gave, bone)
det(bone, a-5)
conj(gave, flower)
punct(flower, ,)
cc(flower, and)
orphan(flower, man)
det(man, the-9)
det(flower, a-11)
punct(gave, .)
~~~

~~~ sdparse
I want her to win and him to lose .

nsubj(want, I)
obj(want, her)
xcomp(want, win)
conj(want, him)
cc(him, and)
orphan(him, lose)
~~~

Note that the `orphan` relation is only used when an ordinary relation would be misleading (for example, when attaching
an object to a subject). In particular, the ordinary `cc` relation should be used for the coordinating conjunction,
which attaches to the pseudo-constituent formed through the `orphan` dependency.

In German the grammar requires that non-finite verbs are at the end of the clause, which may mean that they are far away from
their finite auxiliary verbs, possibly with intervening conjuncts. In the following example we do not try to keep _wurde geschieden_
in one constituent. Instead, the auxiliary verb _wurde_ is promoted as the head of the first conjunct, and the content participle
_geschieden_ heads the third conjunct. There is no verb in the middle conjunct and the `orphan` relation is used instead.
See also [issue 522](https://github.com/UniversalDependencies/docs/issues/522).

~~~ sdparse
Der Genuß wurde von der Arbeit , das Mittel vom Zweck , die Anstrengung von der Belohnung geschieden . \n The pleasure was from the work , the means from-the goal , the effort from the reward distinguished .
nsubj:pass(wurde, Genuß)
obl(wurde, Arbeit)
conj(wurde, Mittel)
orphan(Mittel, Zweck)
punct(Mittel, ,-7)
conj(wurde, geschieden)
nsubj:pass(geschieden, Anstrengung)
obl(geschieden, Belohnung)
punct(geschieden, ,-12)
~~~

In verb-final languages the verb occurs in the last conjunct and gapping may occur in the earlier conjuncts; unlike
German, not even an auxiliary occurs in the first conjunct. Note that [coordination](/u/dep/conj.html), being
a non-dependency relation, must go left-to-right even in these languages. As a result, the first conjunct (clause with
gap) may have to be headed by a non-verb, as the overt verb belongs to the last conjunct clause. The following example
is from Malayalam.

~~~ conllu
# newpar id = cairo09
# sent_id = cairo09
# text = മേരി വെങ്കലവും പീറ്റർ വെള്ളിയും ജെയിൻ സ്വർണവും നേടി.
# translit = mēri veṅkalavuṁ pīṟṟaṟ veḷḷiyuṁ jeyin svaṟṇavuṁ nēṭi.
# text_en = Mary won bronze, Peter silver, and Jane gold.
1	മേരി	മേരി	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	0	root	_	Translit=mēri|LTranslit=mēri|Gloss=Mary
2-3	വെങ്കലവും	_	_	_	_	_	_	_	_
2	വെങ്കലം	വെങ്കലം	NOUN	_	Animacy=Inan|Case=Acc|Number=Sing	1	orphan	_	Translit=veṅkalaṁ|LTranslit=veṅkalaṁ|Gloss=bronze
3	ഉം	ഉം	PART	_	_	1	cc	_	Translit=uṁ|LTranslit=uṁ|Gloss=and
4	പീറ്റർ	പീറ്റർ	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Translit=pīṟṟaṟ|LTranslit=pīṟṟaṟ|Gloss=Peter
5-6	വെള്ളിയും	_	_	_	_	_	_	_	_
5	വെള്ളി	വെള്ളി	NOUN	_	Animacy=Inan|Case=Acc|Number=Sing	4	orphan	_	Translit=veḷḷi|LTranslit=veḷḷi|Gloss=silver
6	ഉം	ഉം	PART	_	_	4	cc	_	Translit=uṁ|LTranslit=uṁ|Gloss=and
7	ജെയിൻ	ജെയിൻ	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Translit=jeyin|LTranslit=jeyin|Gloss=Jane
8-9	സ്വർണവും	_	_	_	_	_	_	_	_
8	സ്വർണം	സ്വർണം	NOUN	_	Animacy=Inan|Case=Acc|Number=Sing	10	obj	_	Translit=svaṟṇaṁ|LTranslit=svaṟṇaṁ|Gloss=gold
9	ഉം	ഉം	PART	_	_	10	cc	_	Translit=uṁ|LTranslit=uṁ|Gloss=and
10	നേടി	നെടുക	VERB	_	Mood=Ind|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No|Translit=nēṭi|LTranslit=neṭuka|Gloss=won
11	.	.	PUNCT	_	PunctType=Peri	1	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~



## Paratactic Constructions

The [parataxis]() relation is used to analyze a number of constructions where clauses are combined
by relations that are looser than standard coordination.

### Side-by-side sentences ("run-on sentences")

The [parataxis]() relation is used for a pair of what could have been standalone sentences,
but which are being treated together as a single sentence. This may happen because sentence
segmentation of the sentence was done primarily following the presence of sentence-final punctuation,
and these clauses are joined by punctuation such as a colon or comma, or not delimited by punctuation
at all. In a spoken corpus, it may happen because what is labeled as a sentence is more
commonly an utterance turn. Even if the treebanker is doing the sentence division, it may
happen because there seems to be a clear discourse relation linking two clauses.
Sometimes there are more than two sentences joined in this way. In this case we make all the later sentences
dependents of the first one, to maximize similarity to the analysis used for conjunction.

~~~ sdparse
Bearded dragons are sight hunters , they need to see the food to move .
parataxis(hunters, need)
~~~

This relation may happen with units that are smaller than sentences:

~~~ sdparse
Divided world the CIA
amod(world, Divided)
parataxis(world, CIA)
det(CIA, the)
~~~

### Paired clauses with non-conjunction connective ("X so Y" etc.)

The relation is also used for clauses connected by a word like *so*, *then*, *therefore*, or *however*
if neither clause is interpreted as modifying the other, and there is no coordinating conjunction:

~~~ sdparse
He claimed to be a wizard ; however/ADV , he turned out to be a humbug .
parataxis(claimed, turned)
advmod(turned, however)
~~~

~~~ sdparse
I 'm hungry , so/ADV I 'm getting a bagel .
parataxis(hungry, getting)
advmod(getting, so)
~~~

The following, by contrast, are [advcl]() modifiers:

~~~ sdparse
Eat now so/ADV you wo n't be hungry later .
advcl(Eat, hungry)
advmod(hungry, so)
~~~

~~~ sdparse
If/SCONJ you build it , then/ADV they will come .
advcl(come, build)
mark(build, If)
advmod(come, then)
~~~

Note that *if*-clauses should almost always be analyzed as subordinate, even when *then* is present.

### Reported speech

When a speech verb interrupts reported speech content, the interruption is treated as a parenthetical parataxis:

~~~ sdparse
The guy , John said , left early in the morning
parataxis(left, said)
punct(said, ,-3)
punct(said, ,-6)
~~~

See further discussion of reported speech at [ccomp](/u/dep/ccomp.html#reported-speech).

### News article bylines

We have used the parataxis relation to connect the parts of a news article byline.
There does not seem to be a better relation to use.

~~~ sdparse
Washington ( CNN ) :
parataxis(Washington, CNN)
punct(CNN, ()
punct(CNN, ))
punct(CNN, :)
~~~

### Interjected Clauses

Single word or phrase interjections are analyzed as [discourse](), but when a whole clause is interjected, we use the relation parataxis.

~~~ sdparse
Calafia has great fries ( they are to die for ! )
parataxis(has, are)
punct(are, ()
punct(are, ))
~~~

~~~ sdparse
Just to let you all know Matt has confirmed the booking for 3rd Dec is OK .
parataxis(confirmed, let)
~~~

In the second example, we treat the second half as the head of the dependency
because the first half feels like a whole clause interjection, not like the main clause of the utterance.

### Tag questions

We also use the parataxis relation for tag questions such as _isn't it?_ or _haven't you?_.

~~~ sdparse
It 's not me , is it ?
parataxis(me, is)
punct(is, ,)
~~~

### Feedback words

In a sentence starting with a feedback word such as _yes_ or _no_ and continuing with a main clause, we take the predicate of the main clause to be the root of the sentence and attach the feedback word to this predicate with a [discourse]() relation:

~~~ sdparse
yes , we should apply for membership .
discourse(apply, yes)
~~~

However, when the feedback is expressed by a full clause instead of a feedback word, the predicate of this clause is taken as the root and the predicate of the following clause is attached with a [parataxis]() relation:

~~~ sdparse
I agree , we should apply for membership .
parataxis(agree, apply)
~~~

## Punctuation

Tokens with the relation [u-dep/punct]() always attach to content words (except in cases of ellipsis) and can never have dependents. Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the immediately following conjunct.
2. A punctuation mark preceding or following a dependent unit is attached to that unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<div id="punct1" class="sd-parse">
We have apples , pears , oranges , and bananas .
obj(have, apples)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(bananas, and)
punct(pears, ,-4)
punct(oranges, ,-6)
punct(bananas, ,-8)
</div>

<div id="punct2" class="sd-parse">
Der Mann , den Sie gestern kennengelernt haben , kam wieder .
punct(kennengelernt, ,-3)
punct(kennengelernt, ,-9)
punct(kam, .)
</div>

<div id="punct3" class="sd-parse">
A.K.A. , AKA , or a\/k\/a may refer to : “ Also known as ” , used to introduce pseudonyms , aliases , etc. ( Compare f.k.a. for “ formerly known as ” . )
punct(AKA, ,-2)
punct(a/k/a, ,-4)
punct(refer, :)
punct(known-13, “-11)
punct(known-13, ”-15)
punct(used, ,-16)
punct(aliases, ,-21)
punct(etc., ,-23)
punct(Compare, (-25)
punct(Compare, )-35)
punct(known-31, “-29)
punct(known-31, ”-33)
punct(Compare, .-34)
</div>

See also examples at [parataxis]().
