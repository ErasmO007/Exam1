import { Router } from "express";
import ArticleModel from "../models/article.js";
import { get } from "mongoose";

const router = Router();

router.post("/articles", async (req, res) => {
  const article = new ArticleModel(req.body);

  try {
    await article.save();
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/articles", async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;


