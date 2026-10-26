---
layout: base
title:  'Statistics of ccomp in UD_Sinhala-Appuwa'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-Appuwa: Relations: `ccomp`

This relation is universal.

2 nodes (0%) are attached to their parents as `ccomp`.

1 instances of `ccomp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="si_appuwa-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="si_appuwa-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="si_appuwa-pos-VERB.html">VERB</a></tt>-<tt><a href="si_appuwa-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 ccomp	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	එහෙනම්	එහෙනම්	ADV	_	_	5	advmod	_	_
3	කිසිම	කිසිම	DET	_	PronType=Ind	4	det	_	_
4	අනුමානයක්	අනුමානය	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	_
5	නැහැ,	නෑ	AUX	_	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
6	ඔයා	ඔයා	PRON	_	Number=Sing|PronType=Prs	8	nsubj	_	_
7	රජ	රජ	NOUN	_	Case=Nom|Number=Sing	8	xcomp	_	_
8	වෙනවා	වෙනවා	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
9	,	,	PUNCT	_	_	5	punct	_	_
10	මං	මම	PRON	_	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	අගබිසොව	අගබිසව	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	parataxis	_	_
12	"	"	PUNCT	_	_	5	punct	_	_
13	කියලා	කියලා	SCONJ	_	_	17	advcl	_	_
14	සිරිමල්	සිරිමල්	PROPN	_	Animacy=Hum|Gender=Fem|Number=Sing	17	nsubj	_	_
15	එතනා	එතනා	PROPN	_	Animacy=Hum|Gender=Fem|Number=Sing	14	flat:name	_	_
16	හිනා	හිනා	ADV	_	_	17	advmod	_	_
17	උනා	වෙන්න	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	කළු	කළු	NOUN	_	Degree=Pos	2	amod	_	_
2	කොඩිය	කොඩිය	NOUN	_	Case=Acc|Definite=Def|Number=Sing	3	obj	_	_
3	දැකපු	දැක	VERB	_	Tense=Past|VerbForm=Part	4	acl	_	_
4	බිසෝවරු	බිසෝවරු	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
5	හිතුවා	හිතා	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	රජතුමා	රජතුමා	NOUN	_	Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	_
7	යුද්ධෙන්	යුද්ධ	NOUN	_	Case=Abl|Number=Sing	9	obl	_	_
8	පරාද	පරාද	NOUN	_	Case=Abl|Number=Sing	9	xcomp	_	_
9	උනයි	උන	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	ccomp	_	_
10	කියලා	කිය	SCONJ	_	_	9	mark	_	_
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


