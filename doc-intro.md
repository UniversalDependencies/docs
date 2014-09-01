---
layout: base
title:  'Documentation introduction'
---

## Introduction

This online repository contains dependency annotation documentation
and visualizations, built using a combination of Jekyll, GitHub pages
and embedded brat visualizations. Here's a minimal example:

<div class="example" markdown="1">

An adjectival complement of a verb is an adjectival phrase which functions as the complement (like an object of the verb).

~~~ sdparse
She looks very beautiful
acomp(looks, beautiful)
~~~

</div>

The text is Markdown (with optional inline HTML) and the data for the
visualizations is represented in either the Stanford Dependency or
CoNLL-X format. For example, the above visualization is generated from
this input:

    ~~~ sdparse
    She looks very beautiful
    acomp(looks, beautiful)
    ~~~

See the [links below](#more-information) for more information.

## How to contribute

See [here](contributing.html) for instructions on how to contribute to
this online documentation. [This page](embedsd.html) provides details
on how the visualized examples are created.

## More information:

The following sources of documentation provide further details:

- [Markdown](http://daringfireball.net/projects/markdown/syntax)
- [Github pages](https://pages.github.com/)
- [Embedded brat](http://brat.nlplab.org/embed.html)
- [Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml)
