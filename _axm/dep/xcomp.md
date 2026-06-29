---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily
determined by an argument external to the `xcomp` (normally by the subject of the next higher clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers, such as a purpose clause.
The name `xcomp` is borrowed from Lexical-Functional Grammar.

~~~ conllu
# visual-style 4 9 advcl:relcl color:blue
1	Քրիստոսի	Քրիստոս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	2	nmod:poss	_	_
2	դատաստանին	դատաստան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	աւրինակովն	աւրինակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Def|Number=Sing|Style=Var	4	obl	_	_
4	պարտի	պարտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
6-7	զիր	_	_	_	_	_	_	_	_
6	զ	զ	ADP	_	AdpType=Prep	8	case	_	_
7	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss|Reflex=Yes	8	det:poss	_	_
8	իրաւունքն	իրաւունք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	9	obj	_	_
9	տանել	տանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	xcomp	_	_
10	ըղորդ	ըղորդ	ADV	_	_	9	advmod	_	_
~~~

Note that the above condition “without its own subject” does not mean that a clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause. That is, there should be no available interpretation where the subject of
the lower clause may be distinct from the specified role of the upper clause. In cases where the missing subject may or must be distinct from a fixed role in the
higher clause, [ccomp]() should be used instead. This includes cases of arbitrary subjects and anaphoric control.

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_.
Remember that `xcomp` is used for core arguments of clausal predicates so it will not be used for other instances of secondary predication.
<!-- Interlanguage links updated Po 29. června 2026, 17:44:56 CEST -->
