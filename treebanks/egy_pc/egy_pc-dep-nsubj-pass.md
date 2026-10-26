---
layout: base
title:  'Statistics of nsubj:pass in UD_Egyptian-PC'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-PC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="egy_pc-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_pc-dep-nsubj-outer.html">nsubj:outer</a></tt>.

362 nodes (1%) are attached to their parents as `nsubj:pass`.

362 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57734806629834.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt> (290; 80% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-PROPN.html">PROPN</a></tt> (41; 11% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-PRON.html">PRON</a></tt> (26; 7% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_pc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj:pass	color:blue
1	[č̣(ṭ)]	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=[𓆓]|ID=185810_Rest
2	[mṭw]	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=[𓌃]|ID=78150_Rest
3	(w)ṭ(.w)	wṭi̯	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3aeinf|VerbForm=Fin|Voice=Pass	1	ccomp:speech	_	Hiero=𓂧|ID=51510
4	n	n	ADP	_	Case=Dat|StatPrep=Pron	5	case	_	Hiero=𓈖|ID=400055
5	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	3	obl:arg	_	Hiero=𓎡|ID=10110
6	ṭp	ṭp	NOUN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	Hiero=𓁶|ID=170860
7	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronClass=Suffix|PronType=Prs	6	nmod	_	Hiero=𓎡|ID=10110
8	|	|	PUNCT	_	_	1	punct	_	ID=.|LINE=Punct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:pass	color:blue
1	nꞽ	nꞽ	PART	_	PartType=Neg	2	advmod:neg	_	Hiero=𓂜|ID=78890
2	nꞽk	nꞽk	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=Pred|Tense=Fut|VerbClass=3lit|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓈖𓇋𓎡|ID=80270
3	Ppy	Ppy	PROPN	_	Gender=Masc|NameType=King	2	nsubj:pass	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺|ID=400313
4	Nfr	Nfr	PROPN	_	Gender=Masc|NameType=King|Number=Sing	3	appos	_	Hiero=𓄤|ID=550034
5	kꜣ	kꜣ	NOUN	_	Gender=Masc|Number=Sing	4	flat:name	_	Hiero=𓂓|ID=162870
6	Rꜥw	Rꜥw	PROPN	_	Gender=Masc|NameType=God	4	flat:name	_	Hiero=𓇳|ID=400015

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:pass	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓|ID=185810
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃|ID=78150
3	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc|NameType=God	7	vocative	_	Hiero=𓅃|ID=107500
4	ꞽm(.ꞽ)	m	ADJ	_	Case=Equ|Gender=Masc|Nisba=DePrep|Number=Sing	3	amod	_	Hiero=𓏶|ID=25130
5	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc|NameType=God	4	obl:nisba	_	Hiero=(𓊨:𓁹)|ID=49460
6	Ppy	Ppy	PROPN	_	Gender=Masc|NameType=King	3	appos	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺|ID=400313
7	ḥtm(.w)	ḥtm	VERB	_	Conjug=Suffix|Mood=Ind|SubForm=AbstRel|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Pass	1	ccomp:speech	_	Hiero=(𓎛𓅭:𓏏)|ID=111590
8	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronClass=Suffix|PronType=Prs	7	nsubj:pass	_	Hiero=𓎡|ID=10110
9	m	m	ADP	_	Case=Ins|StatPrep=Cons	10	case	_	Hiero=𓅓|ID=64364
10	ꞽr.t	ꞽr.t	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	Hiero=𓁹|ID=28250
11	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc|NameType=God	10	nmod:poss	_	Hiero=𓅃|ID=107500

~~~


