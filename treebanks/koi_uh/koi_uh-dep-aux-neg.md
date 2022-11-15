---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="koi_uh-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="koi_uh-dep-aux-pot.html">aux:pot</a></tt>.

24 nodes (2%) are attached to their parents as `aux:neg`.

23 instances of `aux:neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41666666666667.

The following 5 pairs of parts of speech are connected with `aux:neg`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (18; 75% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:neg	color:blue
1	Эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	3	aux:neg	_	GTtags=Prt1,3
2	позь	позьны	AUX	_	Connegative=Yes	3	aux:pot	_	GTtags=ConNeg
3	бӧрйыны	бӧрйыны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
4	не	не	CCONJ	Polarity=Neg	_	5	cc:preconj	_	_
5	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	3	obj	_	GTtags=Prop,Sg,Nom
6	Смитӧс	Смит	PROPN	_	Animacy=Hum|Case=Acc|NameType=Sur|Number=Sing	5	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	не	не	CCONJ	Polarity=Neg	_	9	cc	_	_
9	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	6	conj	_	GTtags=Prop,Sg,Nom
10	Браунӧс	Браун	PROPN	_	Animacy=Hum|Case=Acc|NameType=Sur|Number=Sing	9	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:cop	_	GTtags=Pron,Pers,Sg1,Nom
2	татӧн	татӧн	ADV	Adv	_	4	advmod:lmod	_	GTtags=Adv
3	не	не	AUX	Pcle	_	4	aux:neg	_	GTtags=Pcle
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:neg	color:blue
1	Абу	абу	AUX	_	Polarity=Neg	4	aux:neg	_	GTtags=CC,Neg
2	ни	ни	ADV	_	Polarity=Neg	1	fixed	_	_
3	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Sg3,Nom
4	морт	морт	NOUN	_	Animacy=Anim|Case=Nom|Number=Sing	0	root	_	GTtags=Sem/Ani,Sg,Nom|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	а	а	CCONJ	_	_	7	cc	_	_
7	зверь	зверь	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


