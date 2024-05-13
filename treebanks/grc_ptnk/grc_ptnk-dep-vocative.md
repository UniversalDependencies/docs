---
layout: base
title:  'Statistics of vocative in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `vocative`

This relation is universal.

64 nodes (0%) are attached to their parents as `vocative`.

44 instances of `vocative` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.328125.

The following 11 pairs of parts of speech are connected with `vocative`: <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (43; 67% instances), <tt><a href="grc_ptnk-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="grc_ptnk-pos-PART.html">PART</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 vocative	color:blue
1	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say
2	δὲ	δέ	CCONJ	_	_	1	cc	_	Gloss=but,and,however
3	πρὸς	πρός	ADP	_	_	4	case	_	Gloss=+D=at;-+A=to,toward
4	αὐτούς	αὐτός	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Prs	1	obl	_	Gloss=he,she,it,-self,same|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	μηδαμῶς	μηδαμῶς	ADV	_	_	11	advmod	_	Gloss=by-no-means|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	ἀδελφοί	ἀδελφός	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	11	vocative	_	Gloss=brother|SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	μὴ	μή	ADV	_	Polarity=Neg	11	advmod	_	Gloss=no,not
11	πονηρεύσησθε	πονηρεύομαι	VERB	_	Aspect=Perf|Mood=Sub|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Mid	1	ccomp	_	Gloss=to-be-evil,wicked|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 vocative	color:blue
1	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	3	nsubj	_	Gloss=the
2	δὲ	δέ	CCONJ	_	_	3	cc	_	Gloss=but,and,however
3	εἶπαν	λέγω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Οὐχί	οὐχί	ADV	_	Polarity=Neg	3	ccomp	_	Gloss=no-indeed|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	κύριε	κύριος	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	Gloss=lord|SpaceAfter=No
8	·	·	PUNCT	_	_	9	punct	_	_
9	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	Gloss=the
10	παῖδές	παῖς	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	Gloss=child,servant
11	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	10	nmod	_	Gloss=you,your
12	ἤλθομεν	ἔρχομαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	Gloss=to-come,go
13	πρίασθαι	πρίαμαι	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	12	xcomp	_	Gloss=to-buy
14	βρώματα	βρῶμα	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	13	obj	_	Gloss=food,provisions|SpaceAfter=No
15	·	·	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 vocative	color:blue
1	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say
2	δὲ	δέ	CCONJ	_	_	1	cc	_	Gloss=but,and,however
3	Ἡσαῦ	Ἡσαῦ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	Gloss=Esau|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	ἔστιν	εἰμί	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	Gloss=to-be
6	μοι	ἐγώ	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	5	iobj	_	Gloss=me
7	πολλά	πολύς	ADJ	_	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	Gloss=many,much|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	ἄδελφε	ἀδελφός	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	Gloss=brother|SpaceAfter=No
10	·	·	PUNCT	_	_	11	punct	_	_
11	ἔστω	εἰμί	AUX	_	Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	Gloss=to-be
12	σοί	σός	PRON	_	Case=Dat|Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	parataxis	_	Gloss=you
13	τὰ	ὁ	DET	_	Case=Acc,Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	14	nsubj	_	Gloss=the
14	σά	σός	PRON	_	Case=Acc,Nom|Gender=Neut|Number=Plur|Poss=Yes|PronType=Prs	12	csubj	_	Gloss=you|SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


