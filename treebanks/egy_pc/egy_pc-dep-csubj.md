---
layout: base
title:  'Statistics of csubj in UD_Egyptian-PC'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-PC: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="egy_pc-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="egy_pc-dep-csubj-pass.html">csubj:pass</a></tt>.

19 nodes (0%) are attached to their parents as `csubj`.

13 instances of `csubj` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31578947368421.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (10; 53% instances), <tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (5; 26% instances), <tt><a href="egy_pc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="egy_pc-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="egy_pc-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓|ID=185810|Trans=Yes
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃|ID=78150
3	wꜥb.n	wꜥb	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Act	1	ccomp:speech	_	Hiero=𓃂𓈖|ID=44430|Trans=No
4	wꜥb.n	wꜥb	VERB	_	Conjug=Suffix|Gender=Masc|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3lit|VerbForm=Fin	3	csubj	_	Hiero=𓃂𓈖|ID=44430|Trans=Yes
5	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronClass=Suffix|PronType=Prs	4	nsubj	_	Hiero=No|ID=10030_Add
6	m	m	ADP	_	Case=Loc|StatPrep=Cons	7	case	_	Hiero=𓅓|ID=400007
7	śḫ.t	śḫ.t	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	Hiero=𓋴(𓐍:𓏏)𓇏|Hierocl=𓇏|ID=141480
8	ꞽꜣr.w	ꞽꜣr	NOUN	_	Gender=Masc|Number=Plur	7	nmod:poss	_	Hiero=𓇋𓄿𓃭|ID=20810

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	ḥtp.t	ḥtp.t	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Hiero=(𓊵:𓏏𓊪)(𓏏:𓏝)|ID=111360
2	mꜣꜣ.t	mꜣꜣ	VERB	_	Conjug=Suffix|Gender=Fem|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Pres|VerbClass=2aered|VerbForm=Fin	1	csubj	_	Hiero=(𓌴:𓁹)𓄿𓏏𓄿|Hierocl=𓁹|ID=66270|Trans=Yes
3	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	2	nsubj	_	Hiero=𓎡|ID=10110

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	nfr	nfr	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Hiero=𓈖𓄤|ID=550034
2	w(ꞽ)	wꞽ	INTJ	_	_	1	discourse	_	Hiero=𓅱|ID=No
3	ꞽr.tn	ꞽri̯	VERB	_	Conjug=Suffix|Gender=Fem|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3aeinf|VerbForm=Fin	1	csubj	_	Hiero=𓇋(𓁹:𓏏)𓈖|ID=28550|Trans=Yes
4	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc|NameType=God	3	nsubj	_	Hiero=𓅃|ID=107500
5	n	n	ADP	_	Case=Dat|StatPrep=Cons	6	case	_	Hiero=𓈖|ID=400055
6	Ppy	Ppy	PROPN	_	Gender=Masc|NameType=King	3	obl:arg	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺|ID=400313
7	pn	pn	DET	_	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	Hiero=(𓊪:𓈖)|ID=59920
8	n	n	ADP	_	StatPrep=Cons	9	case	_	Hiero=𓈖|ID=400055
9	ꜣḫ	ꜣḫ	NOUN	_	Gender=Masc|Number=Sing	6	conj	_	Hiero=𓅜|ID=200
10	pn	pn	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	Hiero=(𓊪:𓈖)|ID=59920
11	mś.w	mśi̯	VERB	_	Aspect=Perf|Conjug=Suffix|Gender=Masc|Mood=Ind|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3aeinf|VerbForm=Fin	9	acl:relcl	_	Hiero=𓄟𓅱|ID=74950|Trans=Yes
12	nčr	nčr	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	Hiero=𓊹|ID=90260
13	mś.w	mśi̯	VERB	_	Aspect=Perf|Conjug=Suffix|Gender=Masc|Mood=Ind|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3aeinf|VerbForm=Fin	11	conj	_	Hiero=𓄟𓅱|ID=74950|Trans=Yes
14	nčr(.wꞽ)	nčr	NOUN	_	Gender=Masc|Number=Dual	13	nsubj	_	Hiero=𓊹𓊹|ID=90260

~~~


