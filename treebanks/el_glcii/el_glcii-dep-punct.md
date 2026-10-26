---
layout: base
title:  'Statistics of punct in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `punct`

This relation is universal.

1208 nodes (12%) are attached to their parents as `punct`.

707 instances of `punct` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.87748344370861.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (762; 63% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (223; 18% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (89; 7% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (60; 5% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (33; 3% instances), <tt><a href="el_glcii-pos-NUM.html">NUM</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (20; 2% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (12; 1% instances), <tt><a href="el_glcii-pos-DET.html">DET</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-PART.html">PART</a></tt>-<tt><a href="el_glcii-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	2	obj	_	_
2	κανεις	κανω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	;	;	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Γεια	γεια	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	σας	εγώ	PRON	PRON	Case=Gen|Number=Plur|Person=2|PronType=Prs	1	nmod	_	_
3	Δημήτρης	Δημήτρης	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
1	ειναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	IntendedLemma=ειμαι
2	πολυ	πολυ	ADV	ADV	_	3	advmod	_	_
3	καλο	καλος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	για	για	ADP	ADP	_	6	case	_	_
5	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	περιβαλλον	περιβαλλον	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	3	nmod	_	_
7	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes

~~~


