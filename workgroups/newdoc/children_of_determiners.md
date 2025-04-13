---
layout: base
title:  'Children of Determiners'
udver: '2'
---

# Can Determiners Have Children in the Tree Structure?

This page discusses nodes that are attached to their parents via the [det]() relation. When we say _determiner_ in this text, we are referring to the relation and not to the UPOS category [DET](). Of course, there is a strong correlation between the two but it is not absolute. For example, a `DET` could be promoted when its noun is elided, then its incoming relation would be something else than `det` and the rules discussed here would not apply.

Determiners are generally considered function words in UD. As such, they are typically leaf nodes, that is, they do not have children. However, this rule is not strict and the [guidelines list some exceptions](/u/overview/syntax.html#the-status-of-function-words) for various function words including determiners.

For several years, the [UD validator](/release_checklist.html#validation) did not enforce this rule for determiners while it was doing so for other function words. The test was finally [implemented in September 2024](https://github.com/UniversalDependencies/tools/commit/1e4debd) under the label `leaf-det-clf`, [later split](https://github.com/UniversalDependencies/tools/commit/c5b8cf5ecff55c27affa8ff0eac737cb799883c8) to two tests, `leaf-det` and `leaf-clf`; since this page is about determiners and not about classifiers, we are interested in `leaf-det`. Like other similar tests for function words, it allows determiners to have children if the (universal part of the) relation between the determiner and the child is in a predefined subset:

* [goeswith]() – Like any other word, determiner may be incorrectly split to multiple tokens in writing, then the pieces must be connected via `goeswith`.
* [reparandum]() – Like any other word in spoken data, determiner may be the correct word after an incorrect fragment has been uttered, then the incorrect fragment must be attached to the determiner via `reparandum`.
* [fixed]() – This relation is used to connect tokens in fixed multiword expression that act as a function word. Multiword determiners are not common but they do occur e.g. in French _lire <b>de la</b> documentation_ “to read documentation”.
* [conj]() and [cc]() – Determiners can be coordinated (e.g. _<b>each and every</b> member_).
* [punct]() – Punctuation should normally be attached to a content word, but it must be attached to a function word if
  * the function word is the only word enclosed in paired punctuation such as brackets;
  * or if it is the only way how to avoid non-projectivity;
  * or if it separates coordinate function words.

## Light Adverbials

The [guidelines also acknowledge](/u/overview/syntax.html#function-word-modifiers) that “certain types of function words can take a restricted class of modifiers, mainly light adverbials (including negation).” They explicitly give one example that involves a determiner: _<b>not every</b> linguist_. Ideally the validator should have the list of permitted modifiers (light adverbials) for each language; as such lists are currently not available, the validator has additional deprel-level exceptions, although they potentially open the door for other adverbials that should not be allowed:

* [advmod]() – It is used to attach negative particles such as _not_ in _not every linguist_.
* [obl]() – A modifier could be semantically adverbial but syntactically expressed as a nominal rather than an adverb. In that case, it must be attached as `obl` and not as `advmod`. This exception was copied from other function words although it is unclear yet whether it is needed with determiners.


## Problematic Constructions

After the validation test was introduced, it identified problems in over 200 UD treebanks. For some of them, their maintainers suggested that the guidelines should be extended to allow additional specific constructions. The full discussion is in [Issue #1059](https://github.com/UniversalDependencies/docs/issues/1059); as it is extremely long and messy, we try to summarize the interesting points here.


### Compound Determiners

([Laura Rituma](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2413484624))

In Latvian, we have several expressions considered as compound pronouns in Latvian traditional grammar which consist of one particle and one pronoun. For example, _kaut kāds_ where _kaut_ is a particle and _kāds_ is a pronoun (this expression roughly means 'some kind of'). Currently, we annotate the particle as `discourse` which is dependent of pronoun, and pronoun occasionally becomes `det` if the expression describes a noun. This leads to validation error.

The particles in these expressions usually are _kaut_, _diez_, _diezin_, _nez_, _nezin_, and they all have very fuzzy, hard to pin down semantics so we feel uncomfortable annotating them as adverbs.

We would like to annotate these expressions as [compound]() (instead of [fixed]()) because the pronoun is the second element in the phrase and we feel that it is the head of the phrase  because the pronoun inflects together with a noun and bears the most of semantic meaning of the expression.

It seems that the test should not report cases where a determiner has a `compound` child. After all, compound is just a signal that two nodes together act almost like one word, but in contrast to fixed, one of them can be considered the head.


### Classifiers under Determiners

According to [the guidelines on classifiers](/u/dep/clf.html), in the demonstrative + classifier construction in Chinese, the classifier forms a constituent with the demonstrative and must be attached as its child. Therefore, [clf]() must be added as an exception to the validation rule. This is also an exception to the general rule that function words are not chained in UD trees.


### Determiners under Determiners

As the guidelines [say](/u/overview/syntax.html#the-status-of-function-words), multiple determiners are always attached directly to the head noun:

<div id="s3c" class="sd-parse">
All/DET these/DET three/NUM books/NOUN .
det(books, All)
det(books, these)
nummod(books, three)
</div>

However, some languages have constructions that look quite different from the English example above.

([Daniel Swanson](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2400694043))

In Hebrew (both Ancient and Modern), demonstrative pronouns have their own determiners, as in “the men the these” = “these men”. It is also parallel to how adjectival modification works in Modern Hebrew. Maybe determiners under demonstratives could be allowed in some languages but not the others?

~~~conllu
# x- so the RTL text doesn't make this unreadable
1	ה	x-ה	DET	art	PronType=Art	2	det	_	Gloss=the|Ref=GEN_19.8
2	אֲנָשִׁ֤ים	x-אישׁ	NOUN	subs	Gender=Masc|Number=Plur	0	root	_	Gloss=man|Ref=GEN_19.8
3-4	הָאֵל֙	_	_	_	_	_	_	_	_
3	הָ	x-ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_19.8
4	אֵל֙	x-אל	PRON	prde	Number=Plur|PronType=Dem	2	det	_	Gloss=these|Ref=GEN_19.8

~~~


### Case under Determiners

([Petr Kocharov](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2441260051))

Somewhat similar to demonstratives with articles in Hebrew, Classical Armenian has repeated case markers on noun and its demonstrative.
Prepositions and articles can be repeated with modifiers, including demonstrative pronominal adjectives, within NP, cf.

* _i kʻarancʻ y ayscʻanē_
* from stone.ABL.PL from this.ABL.PL
* “from these (from) stones”

~~~sdparse
i kʻarancʻ y ayscʻanē
det(kʻarancʻ, ayscʻanē)
case(kʻarancʻ, i)
case(ayscʻanē, y)
~~~

Attaching the case marker of the demonstrative to the head noun, which has its own copy of the case marker, would be odd.

Unfortunately, if `case` under `det` is allowed in all languages and not just under Classical Armenian demonstratives, it will open the door for cases that are clear errors. For example, the following is in the current Chinese data (brought up by [Koichi Yasuoka](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2435696875)).

~~~conllu
# text = 她的這本書
1	她	她	PRON	PRP	Person=3	5	det	_	SpaceAfter=No
2	的	的	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No
3	這	這	DET	DT	_	5	det	_	SpaceAfter=No
4	本	本	NOUN	NNB	_	3	clf	_	SpaceAfter=No
5	書	書	NOUN	NN	_	0	root	_	SpaceAfter=No

~~~

[DZ](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453383938): 她的 _tā de_ “of her” is a prototypical example of `nmod`. So changing the current `det(書, 她)` to `nmod(書, 她)` will solve it. (On the other hand, the classifier under the second determiner in this example is correct [according to the guidelines](/u/dep/clf.html).)


### Parentheticals

[Laura Rituma](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2438448236) added a Latvian example where [parataxis]() may be needed under a determiner.

_tādā godīgā iestādē ieperinājušies daži (tikai daži!) zagļi_ “a **few (only a few!) thieves** have nested in such an honest institution”

~~~ sdparse
tādā godīgā iestādē ieperinājušies daži ( tikai daži ! ) zagļi
det(zagļi, daži-5)
parataxis(daži-5, daži-8)
~~~

[Dan Zeman](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452635054) thinks it may warrant a clarification/amendment of the guidelines, allowing parenthetical parataxis of determiners similar to coordination. But [Joakim Nivre](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2440023939) thinks that even here we see two determiners that should be attached as siblings to the head noun.

[Sylvain Kahane](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2407036491) also had an example of [parataxis]() but that one turned out to be unproblematic (see below) because the parent node, although tagged [DET](), is not annotated syntactically as a [det]() but [reparandum]().


### Reduplication (flat)

([Flavio Cecchini](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2419904450))

1. The already mentioned reduplication, which is treated through `flat:redup` in Latin treebanks. One example is _quot quot_ from _quot_: while the latter means 'as many as', the reduplication has a distributive sense as in 'for each possible one...' (this expression is sometimes even univerbated). I think to annotate them separately, each depending on the head, is not the right way to deal with them: here we do not have two or more different terms, but really the same one "clonating" itself. On the other hand, `flat` is really the closest relation we have to `fixed`, which would cause no problem, but is not a correct choice (well, in my opinion it is never the correct choice)
    * **Problem:** horizontal relation

Can we deactivate the validation rule if the child of `det` is a `flat` relation?

Dan: Why is [fixed]() not a good choice?
[Flavio](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2455257882): Because it is productive and not idiosyncratic.


## Problems with Referentiality

A large part of the discussion slipped to the related problem of deciding between [det]() and [nmod]() (or their `:poss` subtypes). Joakim believes that the guidelines imply, despite not saying it explicitly, that if the word is referential, it should be attached as `nmod` rather than `det`. It would be the case of all words referring to possessors, regardless whether they are tagged as [PRON](), [DET](), [NOUN]() or [ADJ](). But other people (including Dan) do not understand the guidelines this way.

The referentiality criterion would nevertheless have the advantage that some problems with the `leaf-det` test would disappear. The problems belonging to this class are listed in this section. The occasional need to attach an apposition or a relative clause to a determiner are caused by the fact that the determiner is referential (because it is a possessive). If the referentiality criterion gains support and is approved via an amendment of the guidelines, many treebanks will require large changes. But in the current context, the `leaf-det` test should be probably relaxed for the special cases below.


### Relative Clause Modifying a Referent Hidden in a Possessive Determiner

([Flavio Cecchini](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2419904450))

Latin: The phrase _nostra qui remansissemus caede_ 'the murder of us who are left (behind)', but more literally 'our who are left murder', since _nostra_ is the inflected possessive determiner for the 1st person plural. What happens here is that the possessive adds a nominal person, as it were, and this person is another referent beyond the noun _caede_ 'murder' in this phrase; as such, the relative can target it (or at least, Cicero pleases himself in doing so). We could not really justify an analysis where we shift the relative under the head noun, since the murder is not one of its arguments.
    * **Problem:** the relative clause dependent of the determiner cannot be traced back to the referent of its head

~~~sdparse
nostra qui remansissemus caede
det(caede, nostra)
acl:relcl(nostra, remansissemus)
nsubj(remansissemus, qui)
~~~

Can we deactivate this validation rule if the head element has the feature `Person`, at least for `acl:relcl`?


### Apposition

([Jack Rueter](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2426979819))

A possessive determiner may have an appositional child: _His, Fred's, friends come from all over._ This is in fact not a problem in English where personal possessives are pronouns rather than determiners (and they are attached as [nmod:poss]) but in other languages it is a problem. For example in Erzya:

_Конат-конат сонзэ (Степан Иваныч) ладсо сырелгадсть..._ / _Konat-konat sonzè (Stepan Ivanyč) ladso syrelgadstʹ..._ “such-such.PL his/her (Stepan Ivanych) way.INE become.older.3PL”

~~~sdparse
Конат-конат сонзэ ( Степан Иваныч ) ладсо сырелгадсть
obl(сырелгадсть, ладсо)
det(ладсо, сонзэ)
appos(сонзэ, Степан)
~~~

[Koichi Yasuoka](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2437494587) provided a Chinese example of apposition.


### Nominal Possessive Modifier of a Determiner

([Janine Siewert](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2424872098))

Low Saxon: It is explained in Section 5.1 here: [https://aclanthology.org/2024.lrec-main.1388.pdf](https://aclanthology.org/2024.lrec-main.1388.pdf)
The gloss and translation of the sentence can be found in Section 4.3.

_Ik sto in der Gemoene iarem Denste_ “I stand in the service of the parish.” (lit. “I stand in the.DAT parish.DAT her.DAT service.DAT”)

~~~sdparse
Ik sto in der Gemoene iarem Denste
nsubj(sto, Ik)
obl(sto, Denste)
case(Denste, in)
det(Denste, iarem)
nmod:poss(iarem, Gemoene)
det(Gemoene, der)
~~~

Attaching the possessor in dative case to the possessee instead of the determiner does not represent the way this construction works because 1) the dative possessor cannot be attached to the possessee without the determiner and 2) the possessee can be dropped while the determiner cannot. E.g., in the example in my paper, "In der Gemoene iarem." (literally "in the parish hers") is a valid answer to a specification question in whose service the person stands. (A note to German speakers: Masculine and neuter nouns show that this is indeed a dative, not a genitive.)
The alternative to change the determiners' tags to PRON in Low Saxon would go against UD's own definition of determiners.

DZ: Is _iarem_ coreferential with _der Gemoene_? Attaching _Gemoene_ as [nmod:poss]() of _iarem_ is odd because it suggests that _Gemoene_ is the possessor of her, not of the service.
The cited paper also says: “Among the UD languages, we have found comparable constructions in Afrikaans, Frisian Dutch, and Norwegian, but the annotation has been inconsistent across these languages.” The annotation indeed should be made consistent, but maybe one of those languages uses an analysis that works well under the UD guidelines?

Subsequent comment by [Flavio](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2435696875)
and [Dan](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452688911).


## Quantifiers

Pronominal quantifiers, as opposed to definite cardinal numerals, are treated as determiners following the UD guidelines (see [DET](), [NUM](); the distinction is currently not mentioned directly in the guidelines for [det]() and [nummod](), but these relations are normally used to connect the quantifier with the counted noun, so the UPOS distinction projects to the relation distinction straightforwardly). Nevertheless, pronominal quantifiers can be modified to further specify the quantity or to compare it with some other quantity, as in these Czech examples:

~~~sdparse
třikrát tolik dětí než X \n three.times so.many children than X
advmod(tolik, třikrát)
advmod(so.many, three.times)
det:numgov(dětí, tolik)
det:numgov(children, so.many)
nmod(tolik, X-5)
nmod(so.many, X-11)
case(X-5, než)
case(X-11, than)
~~~

~~~sdparse
víc rozdílů než společných prvků \n more differences than common elements
det:numgov(rozdílů, víc)
det:numgov(differences, more)
nmod(víc, prvků)
nmod(more, elements)
case(prvků, než)
case(elements, than)
amod(prvků, společných)
amod(elements, common)
~~~

~~~sdparse
o 600000 méně lidí \n by 600,000 fewer people
case(600000, o)
case(600,000, by)
nmod(méně, 600000)
nmod(fewer, 600,000)
det:numgov(lidí, méně)
det:numgov(people, fewer)
~~~

The validation exception that could capture these cases looks at the features of the determiner. If there is [NumType]() or [Degree](), [nmod]() children are allowed.
Alternatively, we could require that the relation between the quantifier and its modifier is [obl]() because the quantifier is not really a nominal. Then we would not need a new exception because [obl]() is already allowed for other reasons.


## Problematic Constructions that Do Not Need an Exception


### Adverbial Clauses

([Nathan Schneider](https://github.com/UniversalDependencies/docs/issues/1059#issue-2574038827))

In English, _such_ is a demonstrative determiner and it may license an [advcl](), as in [these results](https://universal.grew.fr/?custom=66f9b53a31605). The guidelines on [sufficiency and excess](/u/overview/specific-syntax.html#sufficiency-and-excess) for _so_ and similar say the `advcl` should attach to the adjective or adverb, not the noun in a case like _sufficient flour_. Then in _such a high price **that nobody could afford it**_, we may want to attach the `advcl` dependent to _such_.

Ideally, the validator should allow `advcl` specifically in English and only if the head is _such_. If there are similar constructions in other languages, they should be also registered specifically for those languages and not en bloc for the whole UD.

([Joakim Nivre](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452025700)) You have the choice of treating _such_ as [amod](), in which case it is unproblematic to attach an `advcl` to it. If you treat _such_ as `det`, you instead have to attach the clause to its head (that is, to the whole phrase). This is similar to how we treat some comparative constructions. (Dan Zeman) If _such_ is `amod`, then it should probably also have the [ADJ]() UPOS tag. Although it looks like the current validator will not complain if it sees a [DET]() attached as `amod` (it definitely does complain if it sees an `ADJ` attached as `det`).


### Vor allem

([Leonie Weissweiler](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2405829551))

German _vor allem_ and _unter anderem_ – resolved in a separate issue?


### Parentheticals in Spoken Data

([Sylvain Kahane](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2407036491))

- [parataxis]() for cases such as "a, I don't how to call that, a kiosk, …": here we have a `reparandum` link between the two "a"s and we would like to attach the parenthesis to the first "a". More exactly we use `parataxis:parenth` in our spoken French treebanks.

DZ: Is attaching the parenthetical to the first determiner better than attaching it to the noun _(kiosk)_? Apart from the non-projectivity – I realize that there is similarity between this and the `discourse` point above.

SK: Yes it is similar to the discourse marker case and I propose the same solution. Moreover, in this case, "_a, I don't know how to call that_" forms a kind of semantic and prosodic unit, which is not the case of "_I don't know how to call that, a kiosk_". I really want to attach the parenthesis to the first determiner.

[DZ](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453479477): Now I realize that here, too, we shouldn't have a problem because the first determiner should be attached to the kiosk as a `reparandum`:

~~~ sdparse
a , I do n't know how to call that , a kiosk
reparandum(kiosk, a-1)
det(kiosk, a-12)
parataxis(a-1, know)
~~~

[SK](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453519235): My mistake! Your validator doesn't forbid [discourse](), [parataxis](), or [orphan]() depending on a [DET]() which is [reparandum](). And it is good like this.

(DZ: Note however that the question of parentheticals depending on determiners is broader and one of the examples mentioned earlier shows that we may want to allow them anyway.)


### Fillers in Spoken Data

([Sylvain Kahane](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2407036491))

For spoken data, we need the following to be added to the validator:

- [discourse](), which is very common between two determiners in false starts: "a, uh, a gap", "my, uh, our friend"

[Dan Zeman](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452618494): Does the interjection have to be attached to one of the determiners? The [discourse page](https://universaldependencies.org/u/dep/discourse.html) says that they are attached to the most relevant nearby unit, which is not very helpful, but I thought they would be attached at clause level (yes, it would be non-projective in this case).

[Sylvain](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452929579): Yes, I really want to analyse the discourse marker as the marker of the reparandum. If you want to keep a constrained rule, we can allow `discourse` only when the determiner is a `reparandum`. Clearly the determiners around the discourse marker are "the most relevant nearby units".

[Dan](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453469086): I am not sure I understand. If the `discourse` child is attached to a parent that itself is a `reparandum`, we do not have a problem at all (regardless whether the UPOS tag of the parent is `DET`). We would have a problem only if the determiner parent were attached as `det`.

[SK](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453519235): My mistake! Your validator doesn't forbid [discourse](), [parataxis](), or [orphan]() depending on a [DET]() which is [reparandum](). And it is good like this.


### False Starts with the dep Relation

([Sylvain Kahane](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2407036491))

[dep]() for false starts such as "the last, the last day": here "the last" forms a phrase the head of which is missing and we decided to have dep(the, last). I am not against another solution, as long as "the last" is still a phrase.

DZ: I don't have a strong position for the first two points above but here I do. I really don't think that [dep]() deserves any dedicated rule anywhere in UD, it is a last resort in datasets but its usage should be minimized. I don't understand what makes this case so different from cases where we use [reparandum]()? I always thought we would use it for false starts as well; the only thing that makes them different from true repairs is that the reparandum is identical with the repair, but I still see a strong analogy, when it is uttered for the second time, the first attempt is canceled in a sense. Moreover, here I would not attach the reparandum to the article but to the head of _the last day_, which would make it unproblematic w.r.t. the rule that determiners do not have children.

[SK](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2452929579): The problem is not with _the last day_, the repandum starts from _day_. The problem is the analysis of _the last_, the false start itself. I don't like the idea to analyze it as a correct phrase, for instance with det(last,the). I want to keep the information that it is a false start and not a complete phrase. It is why we chose dep(the, last), but I am ok to use another relation.
I give you another example of false start, which I would like to analyze similarly:

> _les gens qu'on, qu'on voit pour la première fois_
> 'people who we, who we see for the first time' (In French the relative pronoun cannot be omitted)

Here we have two pronouns _qu'_ and _on_, which form the false start together, and I don't see what could be the link between them apart from `dep`. Maybe a dedicated relation such as `flat:disfluency`?

[DZ](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453496870): It is not a complete phrase but I would still find it natural to apply the UD rules for ellipsis (=> for incomplete phrases), promote _last_ and draw the relation `det(last, the)`. I think the information that it is a false start is already encoded in the incoming `reparandum` relation (which could be further subtyped to `reparandum:falsestart` if it is needed).

~~~ sdparse
the last , the last day
det(last-2, the-1)
punct(last-2, ,)
reparandum(day, last-2)
det(day, the-4)
amod(day, last-5)
~~~

DZ: As for the French example, I understand your concern, although I would claim that the UD ellipsis policy provides a possible solution here, too: `orphan(on, qu')`.

~~~ sdparse
les gens qu' on , qu' on voit pour la première fois
orphan(on-4, qu'-3)
punct(on-4, ,)
reparandum(voit, on-4)
obj(voit, qu'-6)
nsubj(voit, on-7)
~~~

SK: Maybe a dedicated relation such as `flat:disfluency`?

DZ: Right now I think I prefer the ellipsis solution sketched above, but `flat` would probably still be better than `dep`. None of the two solutions should trigger the `leaf-det` validation test.

[SK](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2453519235): My mistake! Your validator doesn't forbid [discourse](), [parataxis](), or [orphan]() depending on a [DET]() which is [reparandum](). And it is good like this.


### Semantic Coordination, Syntactic Flat?

([Koichi Yasuoka](https://github.com/UniversalDependencies/docs/issues/1059#issuecomment-2433801928))

In Classical Chinese 彼此兵 “those and these soldiers” is invalidated by this rule. The English translation has coordinate determiners but there is no coordinating conjunction in the original and 彼此 “that this” are connected via [flat](). Then “that” is attached as [det]() to “soldier”.

Flavio (and Dan): Here the simplest solution would be to use [conj]() instead of [flat](). (But in the end, `flat` may be allowed because of other things, namely reduplication of function words.
