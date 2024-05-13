---
layout: base
title:  'Statistics of nsubj:pass in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="grc_ptnk-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="grc_ptnk-dep-nsubj-outer.html">nsubj:outer</a></tt>.

201 nodes (1%) are attached to their parents as `nsubj:pass`.

165 instances of `nsubj:pass` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18905472636816.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (104; 52% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (53; 26% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt> (19; 9% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt> (14; 7% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-DET.html">DET</a></tt> (6; 3% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-NUM.html">NUM</a></tt> (5; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say
3	ὁ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	Gloss=the;-oh
4	θεός	θεός	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Gloss=god|SpaceAfter=No
5	·	·	PUNCT	_	_	6	punct	_	_
6	γενηθήτω	γίνομαι	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	ccomp	_	Gloss=to-become,come-to-be
7	φῶς	φῶς	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	Gloss=light|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_
9	καὶ	καί	CCONJ	_	_	10	cc	_	Gloss=and,also,even,then,next
10	ἐγένετο	γίνομαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	2	conj	_	Gloss=to-become,come-to-be
11	φῶς	φῶς	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	Gloss=light|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	ἀπεκρίθη	ἀποκρίνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Gloss=to-answer
2	δὲ	δέ	CCONJ	_	_	1	cc	_	Gloss=but,and,however
3	Ἐφρὼν	Ἐφρών	PROPN	_	Gender=Masc|Number=Sing	1	nsubj:pass	_	Gloss=Ephron
4	τῷ	ὁ	DET	_	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	det	_	Gloss=the
5	Ἁβραὰμ	Ἁβραάμ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	1	obj	_	Gloss=Abraham
6	λέγων	λέγω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	advcl	_	Gloss=to-say|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nsubj:pass	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	ἐκθρέψω	ἐκτρέφω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-dole,nourish
3	σὲ	σέ	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	2	obj	_	Gloss=you
4	ἐκεῖ	ἐκεῖ	ADV	_	_	2	advmod	_	Gloss=there|SpaceAfter=No
5	—	—	PUNCT	_	_	6	punct	_	_
6	ἔτι	ἔτι	ADV	_	_	9	advmod	_	Gloss=also,next
7	γὰρ	γάρ	SCONJ	_	_	9	mark	_	Gloss=for,because
8	πέντε	πέντε	NUM	_	_	9	nummod	_	Gloss=five
9	ἔτη	ἔτος	NOUN	_	Case=Acc,Nom|Gender=Neut|Number=Plur	2	advcl	_	Gloss=years
10	λιμός	λιμός	NOUN	_	Case=Nom|Gender=Fem,Masc|Number=Sing	9	nsubj	_	Gloss=famine|SpaceAfter=No
11	—,	—,	PUNCT	_	_	14	punct	_	_
12	ἵνα	ἵνα	SCONJ	_	_	14	mark	_	Gloss=in-order-that
13	μὴ	μή	ADV	_	Polarity=Neg	14	advmod	_	Gloss=no,not
14	ἐκτριβῇς	ἐκτρίβω	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Pass	2	advcl	_	Gloss=to-wipe-out|SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	σὺ	σύ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	14	nsubj:pass	_	Gloss=you
17	καὶ	καί	CCONJ	_	_	19	cc	_	Gloss=and,also,even,then,next
18	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	19	det	_	Gloss=the
19	υἱοί	υἱός	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	16	conj	_	Gloss=sons
20	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	19	nmod	_	Gloss=you,your
21	καὶ	καί	CCONJ	_	_	22	cc	_	Gloss=and,also,even,then,next
22	πάντα	πᾶς	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	16	conj	_	Gloss=all,every
23	τὰ	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	24	nsubj	_	Gloss=the
24	ὑπάρχοντά	ὑπάρχω	VERB	_	Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	22	acl:relcl	_	Gloss=to-exist;-possessions
25	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	22	nmod	_	Gloss=you,your|SpaceAfter=No
26	.	.	PUNCT	_	_	25	punct	_	_

~~~


