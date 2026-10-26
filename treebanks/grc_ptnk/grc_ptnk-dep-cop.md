---
layout: base
title:  'Statistics of cop in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `cop`

This relation is universal.

472 nodes (1%) are attached to their parents as `cop`.

298 instances of `cop` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04025423728814.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (227; 48% instances), <tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (94; 20% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (73; 15% instances), <tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (36; 8% instances), <tt><a href="grc_ptnk-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (17; 4% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (14; 3% instances), <tt><a href="grc_ptnk-pos-PART.html">PART</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="grc_ptnk-pos-NUM.html">NUM</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="grc_ptnk-pos-DET.html">DET</a></tt>-<tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	καὶ	καί	CCONJ	_	_	6	cc	_	Gloss=and,also,even,then,next|Ref=GEN_11.1
2	ἦν	εἰμί	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	Gloss=to-be|Ref=GEN_11.1
3	πᾶσα	πᾶς	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	Gloss=all,every|Ref=GEN_11.1
4	ἡ	ὁ	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Gloss=the|Ref=GEN_11.1
5	γῆ	γῆ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	Gloss=earth|Ref=GEN_11.1
6	χεῖλος	χεῖλος	NOUN	_	Case=Acc,Nom|Gender=Neut|Number=Sing	0	root	_	Gloss=lip,shore|Ref=GEN_11.1
7	ἕν	εἷς	NUM	_	Case=Acc,Nom|Gender=Neut|Number=Sing|NumType=Card	6	nummod	_	Gloss=one|Ref=GEN_11.1|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	Ref=GEN_11.1
9	καὶ	καί	CCONJ	_	_	10	cc	_	Gloss=and,also,even,then,next|Ref=GEN_11.1
10	φωνὴ	φωνή	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	Gloss=voice,sound,noise|Ref=GEN_11.1
11	μία	εἷς	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	10	nummod	_	Gloss=one|Ref=GEN_11.1
12	πᾶσιν	πᾶς	ADJ	_	Case=Dat|Gender=Masc,Neut|Number=Plur	10	iobj	_	Gloss=all,every|Ref=GEN_11.1|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	Ref=GEN_11.1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cop	color:blue
1	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say|Ref=GEN_33.9
2	δὲ	δέ	CCONJ	_	_	1	cc	_	Gloss=but,and,however|Ref=GEN_33.9
3	Ἡσαῦ	Ἡσαῦ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	Gloss=Esau|Ref=GEN_33.9|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Ref=GEN_33.9
5	ἔστιν	εἰμί	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	Gloss=to-be|Ref=GEN_33.9
6	μοι	ἐγώ	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	5	iobj	_	Gloss=me|Ref=GEN_33.9
7	πολλά	πολύς	ADJ	_	Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	Gloss=many,much|Ref=GEN_33.9|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	Ref=GEN_33.9
9	ἄδελφε	ἀδελφός	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	Gloss=brother|Ref=GEN_33.9|SpaceAfter=No
10	·	·	PUNCT	_	_	11	punct	_	Ref=GEN_33.9
11	ἔστω	εἰμί	AUX	_	Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	Gloss=to-be|Ref=GEN_33.9
12	σοί	σός	PRON	_	Case=Dat|Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	parataxis	_	Gloss=you|Ref=GEN_33.9
13	τὰ	ὁ	DET	_	Case=Acc,Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	14	nsubj	_	Gloss=the|Ref=GEN_33.9
14	σά	σός	PRON	_	Case=Acc,Nom|Gender=Neut|Number=Plur|Poss=Yes|PronType=Prs	12	csubj	_	Gloss=you|Ref=GEN_33.9|SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	Ref=GEN_33.9

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	καὶ	καί	CCONJ	_	_	4	cc	_	Gloss=and,also,even,then,next|Ref=GEN_11.30
2	ἦν	εἰμί	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	Gloss=to-be|Ref=GEN_11.30
3	Σάρα	Σάρα	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	Gloss=Sarai|Ref=GEN_11.30
4	στεῖρα	στεῖρος	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Gloss=barren-woman;-keel|Ref=GEN_11.30
5	καὶ	καί	CCONJ	_	_	7	cc	_	Gloss=and,also,even,then,next|Ref=GEN_11.30
6	οὐκ	οὐ	ADV	_	Polarity=Neg	7	advmod	_	Gloss=no,not|Ref=GEN_11.30
7	ἐτεκνοποίει	τεκνοποιέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	Gloss=to-produce-children|Ref=GEN_11.30|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	Ref=GEN_11.30

~~~


