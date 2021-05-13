---
layout: base
title:  'Statistics of punct in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `punct`

This relation is universal.

18279 nodes (11%) are attached to their parents as `punct`.

10247 instances of `punct` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.0003829531156.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (8547; 47% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (5580; 31% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (1596; 9% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (813; 4% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (594; 3% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (264; 1% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (234; 1% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (212; 1% instances), <tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (197; 1% instances), <tt><a href="he_htb-pos-ADP.html">ADP</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (120; 1% instances), <tt><a href="he_htb-pos-DET.html">DET</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (68; 0% instances), <tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (28; 0% instances), <tt><a href="he_htb-pos-X.html">X</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (22; 0% instances), <tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="he_htb-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 punct	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	מוח	מוח	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	התפלץ	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	לא	ADV	ADV	Polarity=Neg	5	advmod	_	_
5	רק	רק	ADV	ADV	_	6	advmod	_	_
6	מ	מ	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	תופעה	תופעה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	מבישה	מביש	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	אלא	CCONJ	CCONJ	_	14	cc	_	_
12	גם	גם	ADV	ADV	_	13	advmod	_	_
13	מ	מ	ADP	ADP	_	14	case	_	_
14	דרכי	דרך	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	הערמה	הערמה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound:smixut	_	_
17	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
1	לא	לא	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	נהרגו	נהרג	VERB	VERB	Gender=Fem,Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Mid	0	root	_	_
3	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	נזירות	נזירה	NOUN	NOUN	Gender=Fem|Number=Plur	2	nsubj	_	SpaceAfter=No
5	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	אלא	אלא	CCONJ	CCONJ	_	8	cc	_	_
8	נשים	איש	NOUN	NOUN	Gender=Fem|Number=Plur	4	conj	_	_
9	ערביות	ערבי	ADJ	ADJ	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	כנראה	כנראה	ADV	ADV	_	12	det	_	_
12	משרתות	משרת	NOUN	NOUN	Gender=Fem|Number=Plur	8	appos	_	_
13	ב	ב	ADP	ADP	_	15	case	_	_
14	ה_	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	_
15	מנזר	מנזר	NOUN	NOUN	Gender=Masc|Number=Sing	12	nmod	_	_
16	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	אכן	אכן	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	כך	כך	ADV	ADV	_	4	advmod	_	_
4	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	חטיבת	חטיבה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	4	nsubj	_	_
6	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
7	הראל	הראל	PROPN	PROPN	_	5	flat:name	_	SpaceAfter=No
8	"	"	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


