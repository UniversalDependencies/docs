---
layout: base
title:  'Statistics of cc in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `cc`

This relation is universal.

4725 nodes (3%) are attached to their parents as `cc`.

4704 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65756613756614.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (1845; 39% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (1845; 39% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (394; 8% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (248; 5% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (138; 3% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (108; 2% instances), <tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (65; 1% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (39; 1% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (32; 1% instances), <tt><a href="he_htb-pos-ADP.html">ADP</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="he_htb-pos-DET.html">DET</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-X.html">X</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	ו	ו	CCONJ	CCONJ	_	5	cc	_	_
2	אכן	אכן	ADV	ADV	_	5	advmod	_	_
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	כך	כך	ADV	ADV	_	5	advmod	_	_
5	קרה	קרה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	ב	ב	ADP	ADP	_	8	case	_	_
7	ה_	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	פריצה	פריצה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obl	_	_
9	ל	ל	ADP	ADP	_	11	case	_	_
10	ה_	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	מנזר	מנזר	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
12	ה	ה	DET	DET	Definite=Def|PronType=Art	13	det	_	_
13	חשוך	חשוך	ADJ	ADJ	Gender=Masc|Number=Sing	11	amod	_	_
14	לחלוטין	לחלוטין	ADV	ADV	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	אך	אך	CCONJ	CCONJ	_	6	cc	_	_
2	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
3	לא	לא	ADV	ADV	Polarity=Neg	6	advmod	_	_
4	היה	היה	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	6	cop	_	_
5	מספיק	מספיק	ADV	ADV	_	6	advmod	_	_
6	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
7	ל	ל	ADP	ADP	_	9	case	_	_
8	ה_	ה	DET	DET	Definite=Def|PronType=Art	9	det	_	_
9	קרן	קרן	NOUN	NOUN	Gender=Fem|Number=Sing	6	advmod	_	_
10	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


