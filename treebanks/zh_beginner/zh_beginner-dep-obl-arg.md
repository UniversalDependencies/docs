---
layout: base
title:  'Statistics of obl:arg in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="zh_beginner-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_beginner-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="zh_beginner-dep-obl-tmod.html">obl:tmod</a></tt>.

270 nodes (1%) are attached to their parents as `obl:arg`.

215 instances of `obl:arg` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99259259259259.

The following 18 pairs of parts of speech are connected with `obl:arg`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (95; 35% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (67; 25% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (26; 10% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (22; 8% instances), <tt><a href="zh_beginner-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADP.html">ADP</a></tt> (11; 4% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-DET.html">DET</a></tt> (9; 3% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="zh_beginner-pos-PART.html">PART</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:arg	color:blue
1	我	我	PRON	_	Person=1	6	nsubj	_	Gloss=1SG|SpaceAfter=No|Tone=3|Translit=wǒ
2	晚上	晚上	NOUN	_	_	6	obl	_	SpaceAfter=No|Tone=3_4|Translit=wǎn_shàng
3	要	要	AUX	_	_	6	aux	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=yào
4	给	给	ADP	_	_	5	case	_	SpaceAfter=No|Tone=3|Translit=gěi
5	妈妈	妈妈	NOUN	_	_	6	obl:arg	_	Gloss=mother|SpaceAfter=No|Tone=1_1|Translit=mā_mā
6	打	打	VERB	_	_	0	root	_	Gloss=hit|SpaceAfter=No|Tone=3|Translit=dǎ
7	电话	电话	NOUN	_	_	6	obj	_	SpaceAfter=No|Tone=4_4|Translit=diàn_huà
8	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:arg	color:blue
1	你	你	PRON	_	Person=2	4	nsubj	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
2	给	给	ADP	_	_	3	case	_	SpaceAfter=No|Tone=3|Translit=gěi
3	我	我	PRON	_	Person=1	4	obl:arg	_	Gloss=1SG|SpaceAfter=No|Tone=3|Translit=wǒ
4	打	打	VERB	_	_	7	acl	_	Gloss=hit|SpaceAfter=No|Tone=3|Translit=dǎ
5	电话	电话	NOUN	_	_	4	obj	_	SpaceAfter=No|Tone=4_4|Translit=diàn_huà
6	的	的	PART	_	Case=Gen	4	mark	_	SpaceAfter=No|Tone=5|Translit=de
7	时候	时候	NOUN	_	_	14	obl	_	SpaceAfter=No|Tone=2_4|Translit=shí_hòu
8	，	，	PUNCT	_	_	7	punct	_	SpaceAfter=No|Translit=，
9	我	我	PRON	_	Person=1	14	nsubj	_	Gloss=1SG|SpaceAfter=No|Tone=3|Translit=wǒ
10	正	正	ADV	_	_	14	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=zhèng
11	在	在	ADV	_	_	14	advmod	_	Gloss=PROG|Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=zài
12	跟	跟	ADP	_	_	13	case	_	SpaceAfter=No|Tone=1|Translit=gēn
13	朋友	朋友	NOUN	_	_	14	obl:arg	_	SpaceAfter=No|Tone=2_3|Translit=péng_yǒu
14	打	打	VERB	_	_	0	root	_	Gloss=hit|SpaceAfter=No|Tone=3|Translit=dǎ
15	游戏	游戏	NOUN	_	_	14	obj	_	SpaceAfter=No|Tone=2_4|Translit=yóu_xì
16	。	。	PUNCT	_	_	14	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:arg	color:blue
1	我们	我们	PRON	_	Number=Plur|Person=1	5	nsubj	_	Gloss=1SG|SpaceAfter=No|Tone=3_5|Translit=wǒ_men
2	在	在	ADP	_	_	3	case	_	Gloss=at;on;in|SpaceAfter=No|Tone=4|Translit=zài
3	北京	北京	PROPN	_	_	5	obl:arg	_	SpaceAfter=No|Tone=3_1|Translit=běi_jīng
4	没	没	ADV	_	_	5	advmod	_	Gloss=NEG|Grammar_Target=Yes|SpaceAfter=No|Tone=2|Translit=méi
5	有	有	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
6	房子	房子	NOUN	_	_	5	obj	_	SpaceAfter=No|Tone=2_5|Translit=fáng_zi
7	。	。	PUNCT	_	_	5	punct	_	SpaceAfter=No|Translit=。

~~~


