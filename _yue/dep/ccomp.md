---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement is a full clause that functions like an object of a verb. It has its own subject and the subject is not obligatorily coreferent with any of the arguments of the matrix verb (for more on "obligatory control", see [xcomp]()).

~~~ conllu
# visual-style 2 5 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	知道	_	VERB	_	_	0	root	_	know
3	你	_	PRON	_	_	5	nsubj	_	2SG
4	好	_	ADV	_	_	5	advmod	_	very
5	孝順	_	ADJ	_	_	2	ccomp	_	have-filial-piety

1	"I	_	_	_	_	0	_	_	_
2	know	_	_	_	_	0	_	_	_
3	that	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	are	_	_	_	_	0	_	_	_
6	full	_	_	_	_	0	_	_	_
7	of	_	_	_	_	0	_	_	_
8	filial	_	_	_	_	0	_	_	_
9	piety."	_	_	_	_	0	_	_	_

~~~

The subject of the embedded clause may sometimes be absent, but pragmatically understood, such as in the below example where the thing being mentioned as being stinky may be a room or a pair of socks that was previously discussed or known to be the topic of discussion. 

~~~ conllu
# visual-style 2 6 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	覺	_	VERB	_	_	0	root	_	think
3	唔	_	ADV	_	_	4	advmod	_	NEG
4	覺得	_	VERB	_	_	2	conj	_	think
5	好	_	ADV	_	_	6	advmod	_	very
6	臭	_	ADJ	_	_	2	ccomp	_	stinky
7	呀	_	PART	_	_	2	discourse:sp	_	SP

1	"Do	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	think	_	_	_	_	0	_	_	_
4	it's	_	_	_	_	0	_	_	_
5	very	_	_	_	_	0	_	_	_
6	stinky?"	_	_	_	_	0	_	_	_
7	(talking	_	_	_	_	0	_	_	_
8	about	_	_	_	_	0	_	_	_
9	a	_	_	_	_	0	_	_	_
10	room,	_	_	_	_	0	_	_	_
11	for	_	_	_	_	0	_	_	_
12	example)	_	_	_	_	0	_	_	_

~~~

In some rare cases, a verb may have different meanings, one taking a `ccomp` dependent, and another an `xcomp` dependent. For example, the verb 覺得 _gok3dak1_ may mean "feel, think, consider" or "feel a sensation". The first meaning takes a clausal complement, as in example (2) above; the second meaning requires `xcomp`, as in (3) below, which exhibits a case of "subject control", where the subject of the second predicate 好 開心 / _hou2 hoi1sam1_ "very happy" is necessarily understood as the subject of the matrix verb 覺得 / _gok3dak1_ "feel (a sensation)".

~~~ conllu
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	覺得	_	VERB	_	_	0	root	_	feel
3	好	_	ADV	_	_	4	advmod	_	very
4	開心	_	ADJ	_	_	2	xcomp	_	happy

1	"I	_	_	_	_	0	_	_	_
2	feel	_	_	_	_	0	_	_	_
3	very	_	_	_	_	0	_	_	_
4	happy."	_	_	_	_	0	_	_	_

~~~

Additionally, `ccomp` is used for "extent compounds" (see [compound:ext]()) where a clause with its own subject follows V + 得/到 (for a subjectless predicate following V + 得/到, [xcomp]() is used).

~~~ conllu
# visual-style 1 6 ccomp	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	熱	_	VERB	_	_	0	root	_	hot
2	到	_	PART	_	_	1	compound:ext	_	EXT
3	連	_	ADV	_	_	6	advmod	_	even
4	膠袋	_	NOUN	_	_	6	nsubj	_	plastic-bags
5	都	_	ADV	_	_	6	advmod	_	also
6	出汗	_	VERB	_	_	1	ccomp	_	sweat

1	"It's	_	_	_	_	0	_	_	_
2	so	_	_	_	_	0	_	_	_
3	hot	_	_	_	_	0	_	_	_
4	that	_	_	_	_	0	_	_	_
5	even	_	_	_	_	0	_	_	_
6	plastic	_	_	_	_	0	_	_	_
7	bags	_	_	_	_	0	_	_	_
8	are	_	_	_	_	0	_	_	_
9	sweating."	_	_	_	_	0	_	_	_

~~~

The `ccomp` relation is also used for the copula 係 _hai6_ when its argument is a clause (although in copular constructions, 係 _hai6_ is a [cop]() dependent of the predicate when the predicate is non-clausal).

~~~ conllu
# visual-style 2 5 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	原因	_	NOUN	_	_	2	nsubj	_	reason
2	係	_	VERB	_	_	0	root	_	be
3	佢	_	PRON	_	_	5	nsubj	_	3SG
4	冇	_	AUX	_	_	5	aux	_	NEG.PERF
5	嚟	_	VERB	_	_	2	ccomp	_	come

1	"The	_	_	_	_	0	_	_	_
2	reason	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	he	_	_	_	_	0	_	_	_
5	didn't	_	_	_	_	0	_	_	_
6	come."	_	_	_	_	0	_	_	_

~~~

### 係...((嚟)嘅) constructions

The cleft-like focus constructions involving 係 _hai6_ and 係...(嚟)嘅 _hai6...(lei4) ge3_ are treated similarly to copular constructions with a clausal complement illustrated in (5).  In these constructions 係 _hai6_ is considered the head, and the verb phrase or clause following it its clausal complement. Any noun phrase or adverbial to the left of 係 _hai6_ is treated as a [dislocated]() dependent of 係 _hai6_ (rather than subject, adjunct, or oblique nominal of the complement clause), unless the adverbial is meant to modify 係 _hai6_ itself. Note that clausal subjects to the left of 係 _hai6_ are also treated as [dislocated](). The sentence-final particle 嘅 _ge3_ is attached to the complement clause (although note that (i) 嘅 _ge3_ may also be a nominalizer or a genitive marker on a nominal predicate depending on the context (unless preceded by the final particle 嚟 _lei4_), (ii) other final particles with an initial _g-_ sound may occur in place of 嘅 _ge3_, such as 㗎 _gaa3_ and 咖嘛 _ga1maa3_).

~~~ conllu
# visual-style 2 3 ccomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	阿明	_	PROPN	_	_	2	dislocated	_	Ming
2	係	_	VERB	_	_	0	root	_	be
3	戴	_	VERB	_	_	2	ccomp	_	wear
4	隱形眼鏡	_	NOUN	_	_	3	obj	_	contact-lenses
5	嘅	_	PART	_	_	3	discourse:sp	_	SP

1	"It's	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	case	_	_	_	_	0	_	_	_
4	that	_	_	_	_	0	_	_	_
5	Ming	_	_	_	_	0	_	_	_
6	wears	_	_	_	_	0	_	_	_
7	contact	_	_	_	_	0	_	_	_
8	lenses."	_	_	_	_	0	_	_	_

~~~

### Subject-less `ccomp` vs. subject-control `xcomp`

It may be difficult sometimes to differentiate between (i) `ccomp` with the subject of the complement clause (non-obligatorily) dropped and (ii) a case of subject-control `xcomp` where the subject is obligatorily absent.

One can reinsert a subject into the complement clause as a test to separate the above two situations. If the result is perfectly grammatical AND the meaning of the matrix verb does not change, it is likely situation (i) where the clausal complement should be linked to the matrix verb with `ccomp` (as shown in 2’ below). Otherwise, if the sentence becomes ungrammatical OR the meaning of the matrix verb changes, then it would likely be situation (ii) with `xcomp` (as shown in 3’ below). In the following sentences, the reinserted subjects are emphasized, the matrix verbs italicized, and the complement clauses in brackets:

- (2’)
- 你 <i>覺</i> 唔 <i>覺得</i> [<b>間 房</b> 好 臭] 呀？ (cf. 2)
- 2SG <i>think</i> NEG <i>think</i> [<b>the room</b> very stinky] SP
- "Do you think the room is very stinky?"
  - grammatical
  - AND matrix verbs in (2) and (2’) have the same meaning 	
  - CONCLUSION: matrix verb 覺得 'think' in (2) → `ccomp`
- 
- (3’)
- 我 <i>覺得</i> [<b>我</b> 好 開心] (cf. 3)
- 1SG <i>think</i> [<b>1SG</b> very happy]
- "I think I’m very happy" (Unavailable: "I feel very happy" as seen in (3))
  - grammatical
  - BUT matrix verbs in (3) and (3’) have different meanings ("feel" vs. "think", respectively)
  - CONCLUSION: matrix verb 覺得 'feel' in (3) → `xcomp`

See [xcomp]() for another test for differentiating between `ccomp` and object-control `xcomp`.
<!-- Interlanguage links updated Čt lis 12 09:43:17 CET 2020 -->
