import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";
import auth from "../../../../utils/auth";

const deleteItem = async(req, res) => {
    try {
        await connectDB();
        await ItemModel.deleteOne({ id: req.query.id }, req.body);
        if (singleItem.email === req.body.email) {
            return res.status(200).json({
                message: "アイテム削除成功",
            });
        } else {
            throw new Error();
        }
    } catch (err) {
        return res.status(200).json({ message: "アイテム削除失敗" });
    }
};

export default auth(deleteItem);