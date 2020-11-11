---
layout: base
title:  'Statistics of appos:trans in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `appos:trans`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-appos.html">appos</a></tt>.

22 nodes (0%) are attached to their parents as `appos:trans`.

22 instances of `appos:trans` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 9 pairs of parts of speech are connected with `appos:trans`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (9; 41% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (5; 23% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos:trans	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	LangID=DE
2	dann	dann	ADV	_	_	3	advmod	_	LangID=DE
3	liegt	liegen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
4	der	der	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	LangID=DE
5	weiter	weiter	ADV	_	_	3	advmod	_	LangID=DE
6	so	so	ADV	_	_	3	advmod	_	LangID=DE
7	fıkra	fıkra	NOUN	_	Case=Nom|Number=Sing	8	obj	_	LangID=TR
8	anlatıyor	anlat	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	LangID=TR
9	so	so	ADV	_	_	11	advmod	_	LangID=DE
10	als	als	ADP	_	_	11	case	_	LangID=DE
11	Witz	Witz	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos:trans	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos:trans	color:blue
1	Zamanında	zaman	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	LangID=TR
2	o	o	PRON	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TR
3	der	der	PRON	_	Case=Nom|Number=Sing	2	appos:trans	_	LangID=DE
4	war	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	LangID=DE
5	besser	gut	ADJ	_	_	0	root	_	LangID=DE
6	als	als	ADP	_	_	7	case	_	LangID=DE
7	Christiano	Christiano	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	obl	_	LangID=DE
8	Ronaldo	Ronaldo	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	flat	_	LangID=DE|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos:trans	color:blue
1	Okay	Okay	ADJ	_	_	0	root	_	LangID=DE|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	LangID=OTHER
3	tamam	tamam	ADJ	_	_	1	appos:trans	_	LangID=TR|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	LangID=OTHER

~~~


