---
layout: base
title:  'Statistics of compound:affix in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `compound:affix`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `compound`: <tt><a href="he_htb-dep-compound-smixut.html">compound:smixut</a></tt>.

235 nodes (0%) are attached to their parents as `compound:affix`.

222 instances of `compound:affix` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83829787234043.

The following 5 pairs of parts of speech are connected with `compound:affix`: <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (115; 49% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (73; 31% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (23; 10% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (22; 9% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:affix	color:blue
1	יהדות_	יהדות	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	_
2	_של_	של	ADP	ADP	_	3	case:gen	_	_
3	_הם	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod:poss	_	_
4	היתה	היה	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	6	cop	_	_
5	בלתי	בלתי	ADV	ADV	Prefix=Yes	6	compound:affix	_	_
6	רלוונטית	רלוונטי	ADJ	ADJ	Gender=Fem|Number=Sing	0	root	_	_
7	לחלוטין	לחלוטין	ADV	ADV	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 compound:affix	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	היה	היה	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	3	cop	_	_
3	קורבן	קורבן	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	של	של	ADP	ADP	Case=Gen	7	case:gen	_	_
5	אי	אי	ADV	ADV	Prefix=Yes	7	compound:affix	_	HebSource=ConvUncertainHead|SpaceAfter=No
6	-	-	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
7	התאמה	התאמה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod:poss	_	_
8	כ	כ	ADP	ADP	_	10	case	_	_
9	ה_	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	זאת	זאת	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	7	nmod	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:affix	color:blue
1	אי	אי	ADV	ADV	Prefix=Yes	2	compound:affix	_	_
2	אפשר	אפשר	AUX	AUX	VerbType=Mod	3	aux	_	_
3	לקלוט	קלט	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
4	עולים	עולה	NOUN	NOUN	Gender=Masc|Number=Plur	3	obj	_	_
5	ו	ו	CCONJ	CCONJ	_	6	cc	_	_
6	ענפים	ענף	NOUN	NOUN	Gender=Masc|Number=Plur	4	conj	_	_
7	בלי	בלי	ADP	ADP	_	8	case	_	_
8	כסף	כסף	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


