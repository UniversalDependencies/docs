---
layout: base
title:  'Statistics of obl in UD_Greek-Lesbian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Lesbian: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="el_lesbian-dep-obl-agent.html">obl:agent</a></tt>.

190 nodes (6%) are attached to their parents as `obl`.

139 instances of `obl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.36315789473684.

The following 13 pairs of parts of speech are connected with `obl`: <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (139; 73% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-ADV.html">ADV</a></tt> (8; 4% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-DET.html">DET</a></tt> (8; 4% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-PROPN.html">PROPN</a></tt> (8; 4% instances), <tt><a href="el_lesbian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_lesbian-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="el_lesbian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="el_lesbian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_lesbian-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_lesbian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_lesbian-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl	color:blue
1	Του	η	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	μουρό	μουρό	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	ήρτι	έρχουμι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	σ	σι	ADP	_	_	6	case	_	_
5	τουν	η	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	κόσμου	κόσμους	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	3	obl	_	_
7	μ’	μ	ADP	_	_	10	case	_	_
8	ούλα	ούλους	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	10	det	_	_
9	τα	η	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
10	κουλάγια	κουλάγ	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	_
11	τ’	μ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl	color:blue
1	Για	για	INTJ	_	_	2	discourse	_	_
2	έλα	έρχουμι	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Pass	0	root	_	_
3	έδουνα	έδουνα	ADV	_	_	2	advmod	_	_
4	κυρ	κύριους	ADJ	_	Case=Voc|Gender=Masc|Number=Sing	5	amod	_	_
5	Θιμιστουκλή	Θιμιστουκλής	PROPN	_	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	_
6	που	που	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	_	_
7	μ’	ιγώ	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
8	ήθιλις	θέλου	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
9	παντριγιά	παντρειγιά	NOUN	_	Case=Acc|Gender=Fem|Number=Sing|Typo=Yes	8	obj	_	CorrectForm=παντρειγιά
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Μόλις	μόλις	ADV	_	_	3	advmod	_	_
2	τουν	ιγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	είδι	βλέπου	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	πι	απί	ADP	_	_	5	case	_	_
5	καρσί	καρσί	ADV	_	_	3	obl	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


