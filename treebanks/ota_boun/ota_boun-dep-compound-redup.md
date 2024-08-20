---
layout: base
title:  'Statistics of compound:redup in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_boun-dep-compound-lvc.html">compound:lvc</a></tt>.

33 nodes (0%) are attached to their parents as `compound:redup`.

33 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06060606060606.

The following 9 pairs of parts of speech are connected with `compound:redup`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (12; 36% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (6; 18% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (5; 15% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (5; 15% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:redup	color:blue
1	Yanına	yan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
2	garson	garson	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	gelir	gel	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	advcl	_	_
4	gelmez	gel	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	compound:redup	_	_
5	yiyeceği	yiyecek	VERB	Ptcp	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	acl	_	_
6	yemekleri	yemek	NOUN	_	Case=Acc|Number=Plur|Person=3	7	obj	_	_
7	söylemeğe	söyle	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	ccomp	_	_
8	mecbur	mecbur	ADJ	Adj	_	0	root	_	_
9	mudur	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	8	discourse	_	_
10	?	?	PUNCT	Ques	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:redup	color:blue
1	Tombul	tombul	ADJ	Adj	_	3	amod	_	_
2	tombul	tombul	ADJ	Adj	_	1	compound:redup	_	_
3	ellerini	el	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
4	sütninesinin	sütnine	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod:poss	_	_
5	boynuna	boyun	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_
6	atmış	at	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
7	,	,	PUNCT	Comma	_	12	punct	_	_
8	ayaklarını	ayak	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
9	keyifli	keyifli	ADV	_	_	11	advmod	_	_
10	keyifli	keyifli	ADV	Adj	_	9	compound:redup	_	_
11	sallayıp	salla	VERB	Conv	Polarity=Pos|VerbForm=Conv	12	advcl	_	_
12	duruyor	dur	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	conj	_	_
13	.	.	PUNCT	Stop	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:redup	color:blue
1	Ali	Ali	PROPN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	Bey	bey	NOUN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	_
3	şimdi	şimdi	ADV	_	_	6	advmod	_	_
4	pencerenin	pencere	NOUN	_	Case=Gen|Number=Sing|Person=3	5	nmod:poss	_	_
5	önünden	ön	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_
6	kalktı	kalk	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
7	yavaş	yavaş	ADV	Adj	_	11	advmod	_	_
8	yavaş	yavaş	ADJ	Adj	_	7	compound:redup	_	_
9	fesini	fes	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
10	bastonunu	baston	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
11	aradı	ara	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	6	conj	_	_
12	.	.	PUNCT	Stop	_	11	punct	_	_

~~~


