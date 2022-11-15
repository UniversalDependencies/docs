---
layout: base
title:  'Statistics of punct in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `punct`

This relation is universal.

100 nodes (11%) are attached to their parents as `punct`.

100 instances of `punct` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 6 pairs of parts of speech are connected with `punct`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (51; 51% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (34; 34% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (5; 5% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (4; 4% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (4; 4% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-PUNCT.html">PUNCT</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 punct	color:blue
1	මේ	මේ	PRON	_	_	4	nmod	_	_
2	පිළිබඳ	පිළිබඳ	ADP	_	AdpType=Post	1	case	_	_
3	වැඩි	වැඩි	ADJ	_	Degree=Pos	4	amod	_	_
4	විස්තර	විස්තර	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
5	පසුව	පසුව	PART	_	_	6	advmod	_	_
6	හෙළිදරව්	හෙළිදරව්	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut	0	root	_	_
7	වනු	වෙ	VERB	_	Aspect=Prosp|Mood=Ind|VerbForm=Ger|Voice=Pass	6	compound:lvc	_	_
8	ඇත	ඇත	AUX	_	VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
1	එසේ	එසේ	ADV	_	AdvType=Man	2	advmod	_	_
2	ගිය	ය	VERB	_	Tense=Past|VerbForm=Part	4	acl	_	_
3	සෑම	සෑම	DET	_	_	4	det	_	_
4	කෙනාම	කෙනා	NOUN	_	Animacy=Anim|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
5	පාවා	පාව	VERB	_	Tense=Past|VerbForm=Part	6	compound:svc	_	_
6	දෙන්නකු	දෙන	NOUN	_	Animacy=Anim|Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	_
7	ලෙස	ලෙස	PART	_	AdpType=Post	6	case	_	_
8	සැලකේ	සලක	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 punct	color:blue
1	මේ	මේ	DET	_	_	2	det	_	_
2	ආශිර්වාදය	ආශීර්වාද	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	6	nsubj	_	_
3	ශ්‍රී	ශ්‍රී	ADJ	_	_	6	obl	_	_
4	ලංකාවට	ලංකා	NOUN	_	Case=Cns|Definite=Def|Gender=Neut|Number=Sing	3	flat	_	_
5	බෙහෙවින්	බොහෝ	ADV	_	_	6	advmod	_	_
6	වැදගත්	වැදගත්	ADJ	_	Degree=Pos	0	root	_	_
7	ය	ය	PART	_	AdpType=Post	6	dep	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


