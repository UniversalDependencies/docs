---
layout: base
title:  'Statistics of obl:arg in UD_Egyptian-PC'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-PC: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="egy_pc-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="egy_pc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="egy_pc-dep-obl-nisba.html">obl:nisba</a></tt>, <tt><a href="egy_pc-dep-obl-unmarked.html">obl:unmarked</a></tt>.

946 nodes (3%) are attached to their parents as `obl:arg`.

945 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.89323467230444.

The following 9 pairs of parts of speech are connected with `obl:arg`: <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-PRON.html">PRON</a></tt> (643; 68% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-PROPN.html">PROPN</a></tt> (222; 23% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt> (62; 7% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="egy_pc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_pc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="egy_pc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_pc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="egy_pc-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_pc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="egy_pc-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_pc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	ꞽr.tn	ꞽri̯	VERB	_	Conjug=Suffix|Gender=Fem|Mood=Ind|Nominal=Yes|Number=Sing|SubForm=RelForm|Tense=Past|VerbClass=3aeinf|VerbForm=Fin	5	ccomp:obj	_	Hiero=𓇋𓁹𓍘𓈖|ID=28550
2	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc|NameType=God	1	nsubj	_	Hiero=𓅃|ID=107500
3	n	n	ADP	_	Case=Dat|StatPrep=Cons	4	case	_	Hiero=𓈖|ID=400055
4	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc|NameType=God	1	obl:arg	_	Hiero=(𓊨:𓁹)|ID=49460
5	ꞽr	ꞽri̯	VERB	_	Conjug=Suffix|Mood=Sub|VerbClass=3aeinf|VerbForm=Fin	0	root	_	Hiero=𓇋𓁹|ID=28550
6	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Suffix|PronType=Prs	5	nsubj	_	Hiero=𓆑|ID=10050
7	n	n	ADP	_	Case=Dat|StatPrep=Cons	8	case	_	Hiero=𓈖|ID=400055
8	Ppy	Ppy	PROPN	_	Gender=Masc|NameType=King	5	obl:arg	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺|ID=400313
9	Nfr	Nfr	PROPN	_	Gender=Masc|NameType=King|Number=Sing	8	appos	_	Hiero=𓄤|ID=550034
10	kꜣ	kꜣ	NOUN	_	Gender=Masc|Number=Sing	9	flat:name	_	Hiero=𓂓|ID=162870
11	Rꜥw	Rꜥw	PROPN	_	Gender=Masc|NameType=God	9	flat:name	_	Hiero=𓇳|ID=400015

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:arg	color:blue
1	śwt	śwt	PRON	_	Gender=Masc|Number=Sing|Person=3|PronClass=Ind|PronType=Prs	3	nsubj	_	Hiero=𓇓𓅱𓏏|ID=130830
2	wnn.t	wnn.t	PART	_	PartType=Emp	1	nmod	_	Hiero=(𓇬:𓈖:𓈖)𓏏|ID=550416
3	(r)č̣i̯	rč̣i̯	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbClass=Anom|VerbForm=Part|Voice=Act	0	root	_	Hiero=𓏙|ID=872594
4	tʾ	tʾ	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Hiero=(𓏏:𓏐)(𓏊:𓏒)|Hierocl=𓏐(𓏊:𓏒)|ID=168810
5	n	n	ADP	_	Case=Dat|StatPrep=Cons	6	case	_	Hiero=𓈖|ID=400055
6	n.t(ꞽ)w	n.t	NOUN	_	Gender=Masc|Nisba=DeNom|Number=Plur	3	obl:arg	_	Hiero=(𓈖:𓏏)𓅆𓅆𓅆|ID=89890

~~~


