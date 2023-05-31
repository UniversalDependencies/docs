---
layout: base
title:  'Statistics of cc:preconj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-cc.html">cc</a></tt>.

14 nodes (0%) are attached to their parents as `cc:preconj`.

14 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35714285714286.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 43% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 14% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc:preconj	color:blue
1	Sekä	sekä	CCONJ	_	_	4	cc:preconj	4:cc:preconj	_
2	tämän	tämä	PRON	_	Case=Gen|Number=Sing|PronType=Dem	3	det	3:det	_
3	välikohtauksen	väli#kohtaus	NOUN	_	Case=Gen|Number=Sing	4	nmod:poss	4:nmod:poss	_
4	ajankohdasta	ajan#kohta	NOUN	_	Case=Ela|Number=Sing	9	obl	9:obl	_
5	että	että	CCONJ	_	_	8	cc	8:cc	_
6	sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	7	nmod:poss	7:nmod:poss	_
7	tapahtumien	tapahtuma	NOUN	_	Case=Gen|Number=Plur	8	nmod:poss	8:nmod:poss	_
8	järjestyksestä	järjestys	NOUN	_	Case=Ela|Number=Sing	4	conj	4:conj	_
9	keskusteltiin	keskustella	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
10	voimakkaasti	voimakkaasti	ADV	_	Derivation=Sti	9	advmod	9:advmod	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc:preconj	color:blue
1	Japanin	Japani	PROPN	_	Case=Gen|Number=Sing	4	obl	4:obl	_
2	ulkopuolella	ulkopuolella	ADP	_	AdpType=Post	1	case	1:case	_
3	keisareihin	keisari	NOUN	_	Case=Ill|Number=Plur	4	obl	4:obl	_
4	viitataan	viitata	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	etunimillä	etu#nimi	NOUN	_	Case=Ade|Number=Plur	4	obl	4:obl	_
6	sekä	sekä	CCONJ	_	_	8	cc:preconj	8:cc:preconj	_
7	heidän	hän	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	8	nsubj	8:nsubj	_
8	eläessään	elää	VERB	_	Case=Ine|InfForm=2|Number=Sing|Person[psor]=3|VerbForm=Inf|Voice=Act	4	advcl	4:advcl	_
9	että	että	CCONJ	_	_	10	cc	10:cc	_
10	kuoleman	kuolema	NOUN	_	Case=Gen|Number=Sing	8	conj	8:conj	_
11	jälkeen	jälkeen	ADP	_	AdpType=Post	10	case	10:case	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_
13	Tapa	tapa	NOUN	_	Case=Nom|Number=Sing	14	nsubj	14:nsubj	_
14	alkoi	alkaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
15	keisari	keisari	NOUN	_	Case=Nom|Number=Sing	16	compound:nn	16:compound:nn	_
16	Shōwasta	Shōwa	PROPN	_	Case=Ela|Number=Sing	14	obl	14:obl	SpaceAfter=No
17	.	.	PUNCT	_	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 cc:preconj	color:blue
1	Puhuessaan	puhua	VERB	_	Case=Ine|InfForm=2|Number=Sing|Person[psor]=3|VerbForm=Inf|Voice=Act	15	advcl	15:advcl	_
2	kabinetille	kabinetti	NOUN	_	Case=All|Number=Sing	1	obl	1:obl	_
3	pian	pian	ADV	_	_	11	advmod	11:advmod	_
4	sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	11	obl	11:obl	_
5	jälkeen	jälkeen	ADP	_	AdpType=Post	4	case	4:case	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	11:punct	_
7	kun	kun	SCONJ	_	_	11	mark	11:mark	_
8	Saksan	Saksa	PROPN	_	Case=Gen|Number=Sing	9	nmod:poss	9:nmod:poss	_
9	joukot	joukko	NOUN	_	Case=Nom|Number=Plur	11	nsubj	11:nsubj	_
10	olivat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
11	ylittäneet	ylittää	VERB	_	Case=Nom|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	1	ccomp	1:ccomp	_
12	rajan	raja	NOUN	_	Case=Gen|Number=Sing	11	obj	11:obj	SpaceAfter=No
13	,	,	PUNCT	_	_	11	punct	11:punct	_
14	Chamberlain	Chamberlain	PROPN	_	Case=Nom|Number=Sing	15	nsubj	15:nsubj	_
15	syytti	syyttää	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
16	sekä	sekä	CCONJ	_	_	17	cc:preconj	17:cc:preconj	_
17	Saksaa	Saksa	PROPN	_	Case=Par|Number=Sing	15	obj	15:obj	_
18	että	että	CCONJ	_	_	19	cc	19:cc	_
19	Itävaltaa	Itävalta	PROPN	_	Case=Par|Number=Sing	17	conj	17:conj	SpaceAfter=No
20	.	.	PUNCT	_	_	15	punct	15:punct	_

~~~


