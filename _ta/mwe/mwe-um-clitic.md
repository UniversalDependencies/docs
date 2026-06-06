# Clitic **-உம் / -ம்** (-um)

The form **-உம் / -ம்** is very common in Tamil texts. It is used to mark different syntactic and semantic functions in different constructions. Depending on the context, it may express additivity, emphasis, totality, concession, enumeration, alternative coordination, paired contrast, or predicative coordination.

Traditional Tamil grammar, including the **Tolkāppiyam** tradition, identifies eight major uses of **-உம்**. In Universal Dependencies (UD), however, these uses can mostly be handled using either **PART** or **CCONJ**, depending on the syntactic role of **-உம்** in the sentence.


## Traditional uses of **-உம் / -ம்**

| Tamil term | English translation | Basic function |
|---|---|---|
| எச்சம் | residual / additive inclusion | Indicates that the marked item is included, while others are also implied |
| சிறப்பு | special emphasis / scalar emphasis | Highlights something by elevating or lowering it; often similar to ‘even’ |
| ஐயம் | doubt / uncertainty / alternative | Marks uncertainty, doubt, or alternatives |
| எதிர்மறை | contrast / contrary / concessive meaning | Indicates a meaning contrary to expectation; often similar to ‘even if’ |
| முற்று | totality / completeness | Indicates completeness or total inclusion |
| எண் | enumeration | Lists several items in sequence |
| தெரிநிலை | explicit contrast / clarificatory contrast | Clarifies a contrastive meaning, often in paired expressions |
| ஆக்கம் | change of state / becoming | Indicates change into another state or quality, often with coordinated predicates |


---

## Additive inclusion / எச்சம்

**எச்சம்** indicates an incomplete or residual meaning: the marked item is included, but other relevant items are also implied.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| இராமனும் வந்தான் | இராமன் + உம் வந்தான் | Raman-ADD come-PST.3MSG | Raman also came |

Rule:

```text
இராமனும் → இராமன் + உம்
```

Explanation:

In **இராமனும் வந்தான்**, **-உம்** means ‘also/too’. It implies that Raman came in addition to others. Since it does not link two overt noun phrases in the sentence, it is treated as **PART**, not **CCONJ**.

---

### Scalar emphasis / சிறப்பு

**சிறப்பு** gives special emphasis. It may elevate or lower the referent on a scale. In many contexts, it is close to English **even**.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| அறிஞருக்கும் எட்டாப்பொருள் | அறிஞர்க்கு + உம் எட்டாப்பொருள் | scholar-DAT-ADD reach.NEG-thing | a thing beyond even scholars |

```text
அறிஞருக்கும் → அறிஞர்க்கு + உம்
```

Explanation:

Here **-உம்** gives scalar focus. It means that the thing is beyond scholars too, or even beyond scholars. Since **-உம்** modifies the scope of one phrase and does not coordinate two overt elements, it is treated as **PART**.

---

### Totality / முற்று

**முற்று** indicates totality or completeness.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| எல்லாரும் வந்தனர் | எல்லார் + உம் வந்தனர் | everyone-ADD come-PST.3PL | Everyone came |

Rule:

```text
எல்லாரும் → எல்லார் + உம்
```

Explanation:

In **எல்லாரும் வந்தனர்**, **-உம்** contributes a totality meaning. It marks the whole set as included. It does not coordinate separate overt elements. Therefore, it is treated as **PART**.

---

### Concessive meaning / எதிர்மறை

**எதிர்மறை** gives a contrary or concessive meaning, often similar to **even if**.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| நாள் தவறினும் நாத்தவறான் | நாள் தவறின்  + உம் நாத்தவறான் | day fail-COND-CONC tongue-fail-NEG.3MSG | Even if the day fails, his word will not fail |

Rule:

```text
தவறினும் → தவறின் + உம்
```

Explanation:

Here **-உம்** contributes a concessive meaning. It does not coordinate two overt comparable elements. Therefore, it is treated as **PART**.

---

### **-உம் / -ம்** as `CCONJ`

When **-உம் / -ம்** links two or more overt comparable elements, it functions conjunctively. In such cases, it participates in a coordination structure and may be treated as a coordinating conjunction.

Use:

```text
UPOS = CCONJ
```

This applies especially when **-உம்** is used in:

```text
enumeration
alternative coordination
paired contrast
predicative coordination
```

This includes uses such as **எண்**, **ஐயம்**, **தெரிநிலை**, and **ஆக்கம்**.

---

### Enumeration / எண்

**எண்** is used when several items are listed in sequence.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| நிலமும் நீரும் தீயும் | நிலம் + உம் நீர் + உம் தீ + உம் | earth-CONJ water-CONJ fire-CONJ | earth, water and fire |

Rule:

```text
நிலமும் → நிலம் + உம்
நீரும் → நீர் + உம்
தீயும் → தீ + உம்
```

Explanation:

Here **-உம்** links several nominal elements: **நிலம்**, **நீர்**, and **தீ**. Since it links overt comparable elements in an enumeration, it functions as a coordinator.

---

### Alternative or doubtful coordination / ஐயம்

**ஐயம்** marks uncertainty, doubt, or alternatives. In UD terms, when **-உம்** links comparable alternatives, it can be treated as conjunctive.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| பத்தாயினும் எட்டாயினும் கிடைக்கும் | பத்தாயின் + உம் எட்டாயின் + உம் கிடைக்கும் | ten-be.COND-CONJ eight-be.COND-CONJ get-FUT | Whether ten or eight, it will be available |

Rule:

```text
பத்தாயினும் → பத்து + ஆயின் + உம்
எட்டாயினும் → எட்டு + ஆயின் + உம்
```

Explanation:

Here **-உம்** occurs in an alternative structure, similar to **whether…or**. Since it links comparable alternatives, it may be treated as **CCONJ**.

---

### Paired contrast / தெரிநிலை

**தெரிநிலை** clarifies a contrastive meaning, often in paired expressions.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| நன்றும் அன்று தீதும் அன்று | நன்று + உம் அன்று தீது + உம் அன்று | good-CONJ not bad-CONJ not | It is neither good nor bad |

Rule:

```text
நன்றும் →  நன்று + உம்
தீதும் →   தீது + உம்
```

Explanation:

Here **-உம்** participates in a paired contrastive structure. The expression is similar to **neither good nor bad**. Since it links two comparable elements in a contrastive coordination, it is treated as **CCONJ**.

---

### Predicative coordination / ஆக்கம்

**ஆக்கம்** indicates a change into another state or quality. In this use, **-உம்** often links two predicative nominal or adjectival elements.

Examples:

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| நெடியனும் வலியனும் ஆயினான் | நெடியன் + உம் வலியன் + உம் ஆயினான் | tall.one-CONJ strong.one-CONJ become-PST.3MSG | He became tall and strong |

Rule:

```text
நெடியனும் →  நெடியன் + உம்
வலியனும் →   வலியன் + உம்
```

Explanation:

Here **-உம்** links two predicative nominal/adjectival elements: **நெடியன்** and **வலியன்**. Since these are coordinated predicative properties, **-உம்** functions as a conjunctive marker.


---

## In short...

The annotation of **-உம் / -ம்** should be based on its syntactic function, not only on the traditional Tamil grammatical label.

Rule:

```text
If -உம் modifies the scope of one word or phrase → PART
If -உம் links two or more overt comparable elements → CCONJ
```

In other words:

```text
-உம் as additive/focus/scalar/totality/concessive marker (**எச்சம்**, **சிறப்பு**, **முற்று**, **எதிர்மறை**) → PART
-உம் as coordinator in enumeration or paired structures   → CCONJ
```

---


The traditional eight-way classification of **-உம்** is useful for understanding Tamil grammar and meaning. However, it should not be mapped mechanically to UD categories.

For UD annotation, we can use an idea like,

```text
Does -உம் modify one element, or does it link multiple elements?
```

If it modifies one element, annotate it as **PART**.

If it links multiple comparable elements, annotate it as **CCONJ**.
