const StepGoal = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Food Delivery Plan</h2>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="goal"
            value="Weight Loss"
            checked={formData.goal === "Weight Loss"}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
          Weight Loss
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="goal"
            value="Detox Cut Diet"
            checked={formData.goal === "Detox Cut Diet"}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
          Detox Cut Diet
        </label>
      </div>
    </div>
  );
};

export default StepGoal;
